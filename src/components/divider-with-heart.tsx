import { type Icon } from "@phosphor-icons/react";
import { HeartIcon } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
import React from "react";

function DividerWithHeart({
  size = 32,
  weight = "bold",
  className,
  classNames,
  Icon = HeartIcon,
}: {
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
  classNames?: {
    container?: string;
    line?: string;
    heart?: string;
  };
  Icon?: Icon;
}) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center gap-4 my-12",
        className,
        classNames?.container
      )}
    >
      <hr
        className={clsx(
          "border-foreground/10 my-0 mx-auto w-3/4",
          classNames?.line
        )}
      />
      <Icon
        weight={weight}
        className={clsx("text-foreground/20", classNames?.heart)}
        size={size}
      />
      <hr
        className={clsx(
          "border-foreground/10 my-0 mx-auto w-3/4",
          classNames?.line
        )}
      />
    </div>
  );
}

export default DividerWithHeart;
