"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import Dropdown from "./dropdown";

const navOptions = [
  { name: "About Us", href: "#", active: true },
  {
    name: "Nearshoring",
    href: "#",
    active: false,
    options: [
      { name: "Option 1", href: "#" },
      { name: "Option 2", href: "#" },
    ],
  },
  {
    name: "Insurtech",
    href: "#",
    active: false,
    options: [
      { name: "Option 1", href: "#" },
      { name: "Option 2", href: "#" },
    ],
  },
  { name: "Careers", href: "#", active: false },
];

const Nav = () => {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex w-full lg:justify-between">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="h-8 w-auto"
                    src="/logo.png"
                    alt="Your Company"
                    width={200}
                    height={20}
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8 items-center">
                  {navOptions.map(({ href, active, name, options }, index) => {
                    if (options) {
                      return (
                        <Dropdown key={index} name={name} options={options} />
                      );
                    }

                    return (
                      <a
                        key={index}
                        href={href}
                        className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900 ${
                          active
                            ? "border-primary"
                            : "text-gray-500 hover:border-gray-300 hover:text-gray-700 border-transparent"
                        }`}
                      >
                        {name}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button type="button" className="btn btn-primary ml-8">
                    Contact US
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2 ">
              {navOptions.map(({ active, name }, index) => {
                return (
                  <Disclosure.Button
                    key={index}
                    as="a"
                    href="#"
                    className={`block border-l-4   py-2 pl-3 pr-4 text-base font-medium 0 sm:pl-5 sm:pr-6 ${
                      active
                        ? "bg-indigo-50 border-primary text-primary"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    }  `}
                  >
                    {name}
                  </Disclosure.Button>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
