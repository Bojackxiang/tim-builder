"use client";

import { useMedia } from "react-use";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";

import { LANDING_NAVIGATION } from "@/app/config/navigation";
import { NavigatorItem } from "./NavigatorItem";

export const Navigation = () => {
  const isMobile = useMedia("(max-width: 1024px)", false);
  const pathname = usePathname();

  const DesktopNavigation = LANDING_NAVIGATION.map((navItem) => {
    return (
      <NavigatorItem
        key={navItem.name}
        name={navItem.name}
        link={navItem.link}
        isActive={pathname === navItem.link}
      />
    );
  });

  if (isMobile) {
    <Menu className="size-6" />;
  }

  if (!isMobile) {
    return (
      <div className="lg:flex items-center gap-x-2 overflow-x-auto ml-4">
        {DesktopNavigation}
      </div>
    );
  }
};
