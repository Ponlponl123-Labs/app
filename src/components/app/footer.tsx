import { Link } from "@heroui/link";
import React from "react";
import { DiscordIcon, GithubIcon } from "../icons";

function Footer() {
  return (
    <>
      <footer className="px-2 mt-6 z-20">
        <div className="w-full mx-auto px-6 py-4 text-sm text-muted-foreground flex flex-row justify-between items-center">
          <span className="text-xs text-foreground-200 tracking-wider">
            &copy; {new Date().getFullYear()} Ponlponl123 Labs. All rights
            reserved.
          </span>
          <div className="flex flex-row items-center gap-4">
            <Link
              href="https://ponlponl123.com/discord"
              target="_blank"
              color="foreground"
              className="text-foreground-300"
            >
              <DiscordIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/Ponlponl123-Labs"
              target="_blank"
              color="foreground"
              className="text-foreground-300"
            >
              <GithubIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
