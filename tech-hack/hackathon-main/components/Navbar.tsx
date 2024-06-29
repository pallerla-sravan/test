"use client";

import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import ThemeToggle from "./ThemeToggle";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="z-50 flex items-center justify-around p-2 h-auto border-b border-border w-full top-0 sticky bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-x-16">
        <Link href={"/"} className="flex items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            className="dark:invert h-7 rotate-180"
            width={100}
            height={24}
            priority
          />
          <p className="-m-6 font-bold pr-3">SWPF</p>
        </Link>
        <div className="flex gap-x-4 text-gray-400">
          <Link
            href={"/"}
            className={cn("hover:text-blue-600", { "text-white": pathname === "/" })}
          >
            Home
          </Link>
          <Link
            href={"/mitigation"}
            className={cn("hover:text-blue-600", { "text-white": pathname === "/mitigation" })}
          >
            Mitigation
          </Link>
          <Link
            href={"/adaptation"}
            className={cn("hover:text-blue-600", { "text-white": pathname === "/adaptation" })}
          >
            Adaptation
          </Link>
          <Link
            href={"/impact-reduction"}
            className={cn("hover:text-blue-600", { "text-white": pathname === "/impact-reduction" })}
          >
            Impact Reduction
          </Link>
          <Link
            href={"/early_warning"}
            className={cn("hover:text-blue-600", { "text-white": pathname === "/early_warning" })}
          >
            Early Warning Systems
          </Link>
        </div>
      </div>
      <div className="flex gap-x-2">
        <Input placeholder="Search...?" />
        <Avatar>
          <AvatarImage src="/ulogo.png" />
          <AvatarFallback>SK</AvatarFallback>
        </Avatar>
        <ThemeToggle />
      </div>
    </nav>
  );
}
