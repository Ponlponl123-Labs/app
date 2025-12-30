"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@heroui/button";

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="full"
      className="bg-zinc-50 dark:bg-zinc-900"
      height={48}
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 w-max">
          <NextLink
            data-active-bounce="true"
            className="flex justify-start items-center gap-2 hover:bg-foreground/5 active:opacity-60 rounded-xl py-1 px-2 -ml-2"
            href="/"
          >
            <img
              src="/favicon.ico"
              alt="Ponlponl123 Labs"
              className="h-8 w-8"
            />
            <p className="font-semibold text-sm text-inherit">
              Ponlponl123 Labs
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex basis-1/5 md:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {/* {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={"foreground"}
                href="#"
                size="lg"
                className="w-full px-4 py-2 hover:bg-foreground/10 rounded-xl"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))} */}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
