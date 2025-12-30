"use client";
import FaultyTerminal from "@/components/faulty-terminal";
import SpotlightCard from "@/components/spotlight-card";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Form } from "@heroui/form";
import { motion } from "framer-motion";
import React from "react";
import { AtIcon, PersonSimpleTaiChiIcon } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@heroui/link";

function Login() {
  const [submitted, setSubmitted] = React.useState<Record<
    string,
    FormDataEntryValue
  > | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
  };
  return (
    <>
      <div className="absolute w-full h-full">
        <FaultyTerminal
          scale={2}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0.4}
          dither={0.5}
          curvature={0.16}
          tint="#a7ef9e"
          mouseReact={true}
          mouseStrength={0.1}
          pageLoadAnimation={true}
          brightness={1}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        style={{
          transitionProperty: "step",
        }}
        className="relative z-10 flex flex-col items-center justify-center min-h-full px-4 py-8 dark"
      >
        <SpotlightCard
          className="!bg-black/90 backdrop-blur-lg backdrop-saturate-200 p-8 rounded-2xl max-w-md w-full border-3 border-white/10"
          spotlightColor="rgba(167, 239, 158, 0.32)"
        >
          <div className="flex flex-col items-center w-full">
            <PersonSimpleTaiChiIcon
              className="text-foreground-400 mb-4"
              weight="bold"
              size={32}
            />
            <h2 className="text-2xl font-bold text-center text-foreground tracking-wider">
              Sign In to Laboratory
            </h2>
            <span className="text-foreground/40 mb-6">
              Get started by entering your email below
            </span>
            <Form className="w-full" onSubmit={onSubmit}>
              <Input
                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="inside"
                startContent={
                  <AtIcon className="text-foreground-400" weight="bold" />
                }
                variant="bordered"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
              <Link
                href="/app/forgot-password"
                className="text-foreground/40 mb-2 block text-sm"
              >
                Forgot Password?
              </Link>
              <Button
                type="submit"
                color="success"
                fullWidth
                className="tracking-widest mt-2 font-bold"
                variant="solid"
              >
                Get Started
              </Button>
            </Form>
            <span className="text-foreground/40 mt-4 text-sm">
              by Pressing that button that means you agree to our terms and
              conditions.
            </span>
          </div>
        </SpotlightCard>
      </motion.div>
    </>
  );
}

export default Login;
