import { HoverEffect } from "./ui/card-hover-effect.tsx";
import InnovationAnimationData from "../assets/InnovationAnimationData.json";
import ImpactAnimationData from "../assets/ImpactAnimationData.json";
import MotiveAnimationData from "../assets/MotiveAnimationData.json";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: " 01. Empowerment",
    description:
      "Empowerment through workshops, seminars, and projects to cultivate leadership in blockchain technology.",
    animationData: MotiveAnimationData,
  },
  {
    title: "02. Innovation",
    description:
      "Fostering creativity and innovation through exploration, challenging conventional thinking, and generating groundbreaking advancements",
    animationData: InnovationAnimationData,
  },
  {
    title: "03. Impact",
    description:
      "Utilizing blockchain for positive impact by enhancing transparency, promoting financial inclusion, and driving meaningful global change . ",
    animationData: ImpactAnimationData,
  },
];
