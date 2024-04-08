"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams.tsx";
import { CardHoverEffectDemo } from "./CardHoverEffect.jsx";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] py-15 md:my-auto w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-full mx-auto p-4 ">
        <CardHoverEffectDemo />
      </div>
      <BackgroundBeams />
    </div>
  );
}
