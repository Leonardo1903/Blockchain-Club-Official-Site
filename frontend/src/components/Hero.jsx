import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Lottie from "react-lottie";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import BitcoinData from "../assets/BitcoinAnimation-1711696539205.json";
import Motive from "./Motive";
import { GoogleGeminiEffectDemo } from "./google-gemini-effect";
import { BackgroundBeamsDemo } from "./BackgroundBeams";

const COLORS_TOP = ["#FFA500", "#FF0000", "#E34234"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const BitcoinAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: BitcoinData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <motion.section
        style={{
          backgroundImage,
        }}
        className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full md:w-[1182px] mx-auto space-y-4">
          <div className="w-full">
            <h1 className="md:max-w-full bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
              Decrease your SaaS churn by over 90%
            </h1>
            <p className="my-6 max-w-full md:mx-20 text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
              et, distinctio eum impedit nihil ipsum modi.
            </p>
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 mx-auto"
            >
              Start free trial
              <ArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </div>
          <div>
            <Lottie
              options={BitcoinAnimationOptions}
              height={400}
              width={400}
            />
          </div>
        </div>

        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
      <section>
        <div className="flex flex-col md-flex-row justify-center items-center">
          <div className=""></div>
        </div>
      </section>
      {/* Motive */}
      <GoogleGeminiEffectDemo/>
      <BackgroundBeamsDemo/>
    </>
  );
};

export default Hero;
