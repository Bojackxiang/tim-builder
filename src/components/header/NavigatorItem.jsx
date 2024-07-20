import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const NavigatorItem = (props) => {
  const { name, link, isActive } = props;
  return (
    <Button
      asChild
      size="sm"
      variant="link"
      className={cn(
        "w-full text-slate-800 lg:w-auto justify-between font-normal hover:text-slate-900 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none transition"
      )}
    >
      <div>
        <Link href={link}>{name.toUpperCase()}</Link>
      </div>
    </Button>
  );
};
