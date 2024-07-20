"use client";

import { HeaderLogo } from "./HeaderLogo";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <div className="px-4 lg:px-14 border-b-2 bg-slate-100">
      <div className="mx-auto">
        <div className="w-full flex items-center justify-between bg-slate-100 ">
          <HeaderLogo />
          <Navigation />
        </div>
      </div>
    </div>
  );
};
