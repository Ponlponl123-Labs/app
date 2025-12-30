"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Ponlponl123_Article } from "@/config/fonts";

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "";

  return (
    <body
      className={clsx(
        "min-h-screen text-foreground font-sans antialiased overflow-x-hidden",
        pathname.startsWith("/app") && "overflow-hidden h-screen",
        Ponlponl123_Article.variable
      )}
    >
      {children}
    </body>
  );
}
