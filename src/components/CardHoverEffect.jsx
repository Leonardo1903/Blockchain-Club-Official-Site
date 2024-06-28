import { HoverEffect } from "./ui/card-hover-effect.tsx";
import InnovationAnimationData from "../assets/Lottie/InnovationAnimationData.json";
import ImpactAnimationData from "../assets/Lottie/ImpactAnimationData.json";
import MotiveAnimationData from "../assets/Lottie/MotiveAnimationData.json";

export function CardHoverEffectDemo() {
  const projects = [
    {
      title: "01. Empowerment",
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
        "We leverage blockchain for positive impact, enhancing transparency and promoting financial inclusion. Our initiatives drive meaningful change, utilizing blockchain as a catalyst for global improvement.",
      animationData: ImpactAnimationData,
    },
  ];

  return (
    <div className="min-h-screen h-auto max-w-5xl mx-auto px-1 md:px-3 flex items-center ">
      <HoverEffect items={projects} />
    </div>
  );
}
