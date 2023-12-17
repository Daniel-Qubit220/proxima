import { ReactNode } from "react";

const BaseLayout = ({ children }: { children: ReactNode }) => (
  <div className="banner h-screen">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  </div>
);
export default BaseLayout;
