"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect.tsx";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Join",
    },
    {
      text: "our",
    },
    {
      text: "growing",
    },
    {
      text: "WEB3",
      className: "text-orange-500 dark:text-orange-500",
    },
    {
      text: "community",
    },
    // {
    //   text: "Aceternity.",
    //   className: "text-blue-500 dark:text-blue-500",
    // },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-fit  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
