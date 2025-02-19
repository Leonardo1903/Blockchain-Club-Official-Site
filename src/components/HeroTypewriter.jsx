import { TypewriterEffectSmooth } from "./ui/typewriter-effect.tsx";
export function TypewriterEffectSmoothDemo() {
  const words = [
    // {
    //   text: "decentralise .",
    // },
    // {
    //   text: "connect .",
    // },
    // {
    //   text: "empower",
    // },
    {
      text: "Decentralise . Connect . Empower",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-fit  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
