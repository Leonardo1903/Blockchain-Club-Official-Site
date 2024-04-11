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
      "We empower members with the skills to navigate the blockchain landscape confidently. Through workshops, seminars, and projects, we foster leadership in the field. Join us to become a leader in blockchain technology.",
    animationData: MotiveAnimationData,
  },
  {
    title: "02. Innovation",
    description:
      "We nurture creativity and exploration, inspiring members to challenge conventional thinking. Our environment encourages innovative solutions to real-world challenges, fostering groundbreaking advancements.",
    animationData: InnovationAnimationData,
  },
  {
    title: "03. Impact",
    description:
      "We leverage blockchain for positive impact, enhancing transparency and promoting financial inclusion. Our initiatives drive meaningful change, utilizing blockchain as a catalyst for global improvement, thus creating a better world.",
    animationData: ImpactAnimationData,
  },
];
