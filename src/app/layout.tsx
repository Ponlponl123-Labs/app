import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";
import { LayoutClient } from "./layout-client";

import { Ponlponl123_Article } from "@/config/fonts";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="dark">
      <head />
      <LayoutClient>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </LayoutClient>
    </html>
  );
}
