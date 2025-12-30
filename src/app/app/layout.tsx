import "@/styles/globals.css";
import "@/styles/app.css";
import { Metadata, Viewport } from "next";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/app/navbar";
import Footer from "@/components/app/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative flex flex-col h-[calc(100vh-1rem)] bg-foreground/5 m-2 rounded-2xl overflow-hidden">
        <Navbar />
        <main className="w-full flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
