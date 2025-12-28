import { Button } from "@heroui/button";
import React from "react";
import { HeartFilledIcon } from "./icons";

function SponsorBtn() {
  return (
    <Button
      color="primary"
      variant="shadow"
      className="w-max bg-gradient-to-br from-pink-300 to-purple-800 shadow-purple-500/20 hover:shadow-purple-500/30 font-semibold gap-3"
    >
      <div className="relative">
        <HeartFilledIcon
          className="absolute animate-ping"
          style={{ animationDuration: "1.6s" }}
        />
        <HeartFilledIcon />
      </div>{" "}
      Become a Sponsor
    </Button>
  );
}

export default SponsorBtn;
