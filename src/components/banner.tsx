import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Banner = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
    <div className="flex flex-col justify-center gap-8">
      <p className="text-6xl font-semibold">
        Unlock nearshore resources & insurtech capabilites{" "}
      </p>
      <p className="text-2xl leading-7 font-normal">
        We deliver transformation
      </p>
      <button type="button" className="btn btn-primary w-48">
        Discover how
        <ArrowRightIcon className="h-5 w-5 text-white" aria-hidden="true" />
      </button>
    </div>
    <Image src="/image_top.png" alt="Your Company" width={600} height={600} />
  </div>
);

export default Banner;
