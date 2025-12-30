"use client";
import PixelSnow from "@/components/pixel-snow";
import {
  CaretRightIcon,
  HeartIcon,
  SparkleIcon,
  GlobeIcon,
  GitPullRequestIcon,
  CodeIcon,
  UsersIcon,
  ArrowDownIcon,
  StarOfDavidIcon,
  PlusIcon,
  HexagonIcon,
  PolygonIcon,
  PersonSimpleRunIcon,
  PottedPlantIcon,
  PiggyBankIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@heroui/button";
import { useRef } from "react";
import Link from "next/link";
import DividerWithHeart from "@/components/divider-with-heart";

export default function Home() {
  const startSectionId = useRef<HTMLDivElement>(null);
  return (
    <>
      <section className="relative">
        <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-0 opacity-30 dark:opacity-60">
          <PixelSnow
            color="#ffffff"
            flakeSize={0.01}
            minFlakeSize={1.25}
            pixelResolution={300}
            speed={1.25}
            density={0.3}
            direction={125}
            brightness={1}
          />
        </div>
        <div className="container mx-auto min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center px-6 z-10 relative py-24 text-center">
          <div>
            <span className="inline-block bg-primary/10 text-primary font-medium px-3 py-1 rounded-full mb-4 text-sm backdrop-blur-lg backdrop-saturate-200">
              🎄 Welcome to Ponlponl123 Labs
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            A source of innovative for everyone
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            Building a brighter digital future through open-source collaboration
            and transparency.
          </p>
          <div className="flex gap-4 justify-center items-center">
            <Button
              as="a"
              variant="solid"
              color="primary"
              size="md"
              radius="full"
              className="font-semibold"
              data-interactive="true"
              onPress={() => {
                if (!startSectionId.current) return;
                startSectionId.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            >
              <SparkleIcon weight="fill" size={20} />
              Take a look
            </Button>
          </div>
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce flex items-center justify-center gap-2 text-foreground/70 font-bold">
          <ArrowDownIcon size={18} weight="bold" className="-mb-1" />
          See why we loved to innovate with love
        </div>
      </section>
      <DividerWithHeart className="max-w-2xl mx-auto" />
      <section
        className="py-3 relative"
        data-testid="bento-section"
        ref={startSectionId}
      >
        <div className="container max-w-5xl mx-auto z-10 relative grid gap-4 md:gap-10 md:grid-cols-2 px-6">
          <div className="relative overflow-hidden group text-left border-3 border-foreground/10 hover:border-primary/20 hover:bg-primary/5 rounded-3xl p-6 md:p-10 md:row-span-2 transition-all duration-300">
            <div className="absolute -right-6 -bottom-6 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.1] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 text-foreground">
              <GlobeIcon size={240} weight="bold" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-foreground/5 border-3 border-foreground/10 flex items-center justify-center mb-6 text-foreground group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:text-primary transition-all duration-300">
                <GitPullRequestIcon size={28} weight="bold" />
              </div>
              <h2 className="text-3xl font-bold mb-4 tracking-tight">
                Open Source <br />
                <span className="text-foreground/40 group-hover:text-primary transition-colors duration-300">
                  Philosophy
                </span>
              </h2>
              <p className="text-base text-foreground/60 leading-relaxed max-w-md">
                We believe code belongs to everyone. By building in public, we
                foster a culture of transparency, collaboration, and rapid
                innovation that benefits the entire developer ecosystem.
              </p>
            </div>
          </div>
          <Link
            href="/app/developer"
            data-interactive="true"
            className="group relative overflow-hidden border-3 border-foreground/10 hover:border-blue-500/20 hover:bg-blue-500/5 rounded-3xl p-6 md:p-10 transition-all duration-300"
          >
            <div className="absolute -right-6 -bottom-6 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.1] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 text-blue-500">
              <CodeIcon size={160} weight="fill" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300">
                  <CodeIcon size={24} weight="fill" />
                </div>
                <h2 className="text-2xl font-bold">Developer Portal</h2>
                <CaretRightIcon
                  className="ml-2 group-hover:translate-x-1"
                  weight="bold"
                />
              </div>
              <p className="text-sm text-foreground/60 mb-6">
                Explore our Developer Portal, dashboard, and API documentation.
              </p>
            </div>
          </Link>
          <div className="group relative overflow-hidden border-3 border-foreground/10 hover:border-pink-500/20 hover:bg-pink-500/5 rounded-3xl p-6 md:p-10 transition-all duration-300">
            <div className="absolute -right-6 -bottom-6 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.1] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 text-pink-500">
              <UsersIcon size={160} weight="fill" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-foreground/5 border-3 border-foreground/10 group-hover:border-pink-500/10 group-hover:bg-pink-500/10 flex items-center justify-center group-hover:text-pink-500 group-hover:scale-110 transition-transform duration-300">
                  <HeartIcon size={24} weight="fill" />
                </div>
                <h2 className="text-2xl font-bold">Loved Passion</h2>
              </div>
              <p className="text-sm text-foreground/60 mb-6">
                We're loved to build a cool thing with ❤️ always
              </p>
            </div>
          </div>
        </div>
      </section>
      <DividerWithHeart
        className="max-w-4xl mx-auto mb-0"
        Icon={PersonSimpleRunIcon}
      />
      <section data-testid="aboutus-section" className="py-24 relative">
        <div className="container mx-auto px-6 z-10 relative text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-4 flex justify-center items-center gap-2">
            About{" "}
            <img
              src="/favicon.ico"
              alt="Ponlponl123 Labs Logo"
              height={64}
              width={64}
            />
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            Ponlponl123 Labs is dedicated to advancing open-source software and
            fostering a collaborative developer community. Our mission is to
            create innovative, transparent, and accessible digital solutions
            that empower developers worldwide.
          </p>
        </div>
      </section>
      <DividerWithHeart
        className="max-w-4xl mx-auto !my-0"
        Icon={PiggyBankIcon}
      />
      <section data-testid="why-section" className="py-24 relative">
        <div className="container mx-auto px-6 z-10 relative text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Why Open-Source & Non-Profit?
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            Embracing open-source principles allows us to harness the power of
            community-driven development, ensuring our projects are transparent,
            secure, and continuously improved. Operating as a non-profit
            organization aligns with our commitment to prioritize innovation and
            collaboration over profit, enabling us to focus on delivering value
            to the developer ecosystem.
          </p>
        </div>
      </section>
      <DividerWithHeart className="max-w-4xl mx-auto !my-0" Icon={GlobeIcon} />
      <section data-testid="trust-section" className="py-24 relative">
        <div className="container mx-auto px-6 z-10 relative text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Trust through Transparency
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            We believe that trust is built through openness and honesty. By
            making our code, processes, and decision-making transparent, we
            invite scrutiny and collaboration from the community. This approach
            not only enhances security and reliability but also fosters a sense
            of shared ownership and accountability among our contributors and
            users.
          </p>
        </div>
      </section>
      <DividerWithHeart
        className="max-w-4xl mx-auto !my-0"
        Icon={PottedPlantIcon}
      />
      <section
        className="py-24 relative"
        data-testid="sponsor-section"
        id="sponsor"
      >
        <div className="container mx-auto px-6 z-10 relative text-center">
          <h1 className="text-4xl font-bold mb-4">Powered by Community</h1>
          <p className="text-lg text-foreground/70 mb-8">
            We are an independent collective, driven by volunteers and the
            open-source spirit.
            <br />
            This project is made possible thanks to the support of our amazing
            sponsors.
          </p>
          {[
            {
              name: "Astatine",
              textColor: "text-emerald-600",
              gradientFrom: "from-emerald-600",
              gradientTo: "to-pink-500",
              Icon: StarOfDavidIcon,
              sponsorShowcaseCount: 3,
            },
            {
              name: "Francium",
              textColor: "text-amber-600",
              gradientFrom: "from-amber-600",
              gradientTo: "to-red-500",
              Icon: PolygonIcon,
              sponsorShowcaseCount: 5,
            },
            {
              name: "Promethium",
              textColor: "text-stone-600",
              gradientFrom: "from-stone-600",
              gradientTo: "to-zinc-500",
              Icon: HexagonIcon,
              sponsorShowcaseCount: 20,
            },
          ].map((sponsor, tierIndex) => (
            <div key={sponsor.name}>
              <h2 className="flex justify-center items-center gap-2 text-2xl my-6">
                <sponsor.Icon
                  className={sponsor.textColor}
                  weight="bold"
                  size={32}
                />
                <b
                  className={`text-gradient ${sponsor.gradientFrom} ${sponsor.gradientTo}`}
                >
                  {sponsor.name}
                </b>
              </h2>
              <div className="flex flex-wrap gap-4 justify-center items-center my-6 max-w-xl mx-auto">
                {Array.from({ length: sponsor.sponsorShowcaseCount }).map(
                  (_, index) => (
                    <Button
                      as="a"
                      href="https://github.com/sponsors/ponlponl123"
                      target="_blank"
                      variant="bordered"
                      color="default"
                      size={tierIndex == 1 ? "lg" : "md"}
                      radius={tierIndex >= 2 ? "full" : "lg"}
                      isIconOnly={tierIndex > 0}
                      className="font-semibold border-dashed"
                      data-interactive="true"
                      key={sponsor.name + index}
                    >
                      <PlusIcon
                        weight="bold"
                        size={tierIndex == 0 ? 16 : tierIndex == 1 ? 20 : 12}
                      />
                      {tierIndex == 0 && " Become a Sponsor"}
                    </Button>
                  )
                )}
              </div>
            </div>
          ))}
          <div className="mt-10 p-6 rounded-2xl bg-foreground/5 border-2 border-foreground/10 max-w-sm mx-auto">
            <p className="text-lg font-semibold text-foreground mb-2 flex items-center justify-center gap-2">
              A massive thank you to our sponsors!{" "}
              <HeartIcon
                weight="fill"
                className="text-pink-500 animate-pulse"
              />
            </p>
            <p className="text-foreground/60">
              Your incredible support empowers us to dedicate our full time to
              building innovative open-source solutions.
            </p>
          </div>
          <div className="flex gap-4 justify-center items-center mt-8">
            <Button
              as="a"
              target="_blank"
              href="https://github.com/sponsors/ponlponl123"
              variant="solid"
              color="warning"
              size="md"
              radius="full"
              className="font-semibold"
              data-interactive="true"
            >
              <HeartIcon weight="fill" size={20} />
              Be a part of our journey
            </Button>
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center mx-auto text-center mb-24 mt-12 select-none pointer-events-none">
        <span className="text-sm font-medium uppercase tracking-[0.2em] mb-2 text-foreground/30">
          Innovating for humanity
        </span>
        <strong className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-foreground/50 to-foreground/10">
          "We are around the globe"
        </strong>
        <span className="text-xs font-medium uppercase tracking-[0.2em] my-6 text-foreground/30">
          - Developers, by Developers, for Humans -
        </span>
      </div>
    </>
  );
}
