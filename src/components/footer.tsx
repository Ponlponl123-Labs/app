import { Link } from "@heroui/link";
import React from "react";
import { DiscordIcon, GithubIcon } from "./icons";
// import SponsorBtn from "./sponsor";

function Footer() {
  return (
    <>
      {/* <div className="container mx-auto max-w-4xl flex justify-center px-6 py-6">
        <SponsorBtn />
      </div> */}
      <footer className="px-2 mt-6">
        <div className="bg-pink-100/50 dark:bg-foreground/5 rounded-3xl container flex max-md:flex-col gap-8 mx-auto max-w-4xl px-6 py-6">
          <div className="md:max-w-64 w-full flex flex-col gap-2">
            <img
              src="/ponlponl123-labs-small.png"
              alt="Ponlponl123 Labs"
              height={64}
              width={64}
              className="-mt-2"
            />
            <p className="text-xs font-medium tracking-wide opacity-60">
              We're trust in Open-Source, building the future of digital
              innovation with passion and transparency.
            </p>
            <span className="text-xs font-bold opacity-25">
              Ponlponl123 Labs
            </span>
          </div>
          <div className="w-full flex flex-row max-md:flex-wrap justify-end max-md:justify-start gap-4 py-3 max-md:pt-0">
            {[
              {
                title: "From Ponlponl123",
                links: [
                  { name: "Pona!", href: "https://pona.ponlponl123.com" },
                  { name: "Fonts", href: "https://fonts.ponlponl123.com" },
                  {
                    name: "Ponl.link",
                    href: "https://labs.ponlponl123.com/app/link",
                  },
                ],
              },
              {
                title: "For Developers",
                links: [
                  {
                    name: "GitHub",
                    href: "https://github.com/Ponlponl123-Labs",
                  },
                  { name: "Documentation", href: "/docs" },
                  { name: "API Reference", href: "/docs/api" },
                  {
                    name: "Developer Portal",
                    href: "https://labs.ponlponl123.com/app/developer",
                  },
                  {
                    name: "Discord",
                    href: "https://ponlponl123.com/discord",
                  },
                ],
              },
              {
                title: "Transparency",
                links: [
                  {
                    name: "Privacy",
                    href: "https://law.ponlponl123.com/labs/privacy",
                  },
                  {
                    name: "Terms",
                    href: "https://law.ponlponl123.com/labs/terms",
                  },
                ],
              },
            ].map(({ title, links }) => (
              <ul
                className="gap-1 flex flex-col sm:pr-8 md:pr-12 lg:pr-16 md:w-max max-md:w-[calc(50%-1rem)] max-[24rem]:w-full"
                key={title}
              >
                <li>
                  <h6 className="text-base font-semibold">{title}</h6>
                </li>
                {links.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      isExternal={href.startsWith("http")}
                      href={href}
                      className="text-sm opacity-40 w-full box-content font-medium hover:opacity-80 hover:bg-foreground/5 rounded-lg px-2 py-1 transition-opacity -ml-2 max-md:-ml-3 max-md:py-2 max-md:px-3 -mb-1"
                      color="foreground"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="container mx-auto max-w-4xl px-6 py-4 text-sm text-muted-foreground flex flex-row justify-between items-center">
          <span className="text-xs opacity-20 tracking-wider">
            &copy; {new Date().getFullYear()} Ponlponl123 Labs. All rights
            reserved.
          </span>
          <div className="flex flex-row items-center gap-4">
            <Link
              href="https://ponlponl123.com/discord"
              target="_blank"
              color="foreground"
              className="opacity-30"
            >
              <DiscordIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/Ponlponl123-Labs"
              target="_blank"
              color="foreground"
              className="opacity-30"
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
