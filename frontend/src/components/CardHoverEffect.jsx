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
        "Our mission is to empower members with the knowledge and skills needed to navigate the blockchain landscape confidently. Through workshops, seminars, and projects, we equip individuals to become leaders in the field.",
      animationData: MotiveAnimationData,
    },
    {
      title: "02. Innovation",
      description:
        "We foster a culture of creativity and exploration, encouraging members to think outside the box and develop groundbreaking solutions to real-world problems.",
      animationData : InnovationAnimationData,
    },
    {
      title: "03. Impact",
      description:
        "We prioritize making a difference with blockchain. Whether it's increasing transparency or promoting financial inclusion, our goal is to drive positive changes that improve lives.",
      animationData: ImpactAnimationData,
    }
  ];