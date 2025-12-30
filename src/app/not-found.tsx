"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { PottedPlantIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  const [showText, setShowText] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseDown = () => {
    timerRef.current = setTimeout(() => {
      setShowText(true);
    }, 1000);
  };

  const handleMouseUp = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setShowText(false);
  };
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full flex-grow flex items-center justify-center px-4">
        <div className="flex flex-col items-center justify-center gap-6 text-center max-w-md">
          <PottedPlantIcon
            weight="bold"
            size={80}
            className="text-default-400"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-bold">404</h1>
            <h2 className="text-2xl font-semibold">Oops! Page Not Found</h2>
            <p className="text-lg text-default-500">
              We couldn't find what you're looking for. The page might have been
              moved or deleted.
            </p>
          </div>
          <div className="relative">
            <Button
              as={Link}
              href="/"
              data-interactive="true"
              color="primary"
              size="md"
              radius="md"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              Take Me Home
            </Button>
            {showText && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg text-default-500 animate-in fade-in duration-300 absolute mt-2 w-max text-center left-1/2 transform -translate-x-1/2"
              >
                To the place~~, I belong~~
              </motion.p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
