import { motion } from "framer-motion";
import Lottie from "react-lottie";
import InnovationAnimationData from "../assets/InnovationAnimationData.json";
import ImpactAnimationData from "../assets/ImpactAnimationData.json";
import MotiveAnimationData from "../assets/MotiveAnimationData.json";

function Motive() {
  const InnovationAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: InnovationAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const MotiveAnimation = {
    loop: true,
    autoplay: true,
    animationData: MotiveAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const ImpactAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: ImpactAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const backgroundStyles =
    " bg-gradient-to-r from-orange-500 to-red-500 filter";

  return (
    <motion.div
      className={backgroundStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <div>
          <h2 className="text-3xl font-bold text-center py-8 text-white">
            Our Motive
            <div className="flex flex-col md:flex-row items-start justify-center w-full mx-auto space-y-4 md:space-y-0 md:space-x-4 overflow-x-auto py-4">
              <div className="flex flex-col w-full p-4 bg-transparent shadow  border rounded text-white">
                <h2 className="text-xl font-bold mb-2 text-center ">
                  01. Empowerment
                </h2>
                <p className="text-base leading-relaxed">
                  Our mission is to empower members with the knowledge and
                  skills needed to navigate the blockchain landscape
                  confidently. Through workshops, seminars, and projects, we
                  equip individuals to become leaders in the field.
                </p>
                <Lottie
                  options={InnovationAnimationOptions}
                  height={200}
                  width={200}
                />
              </div>
              <div className="flex flex-col w-full p-4 bg-transparent shadow border rounded text-white">
                <h2 className="text-xl font-bold mb-2 text-center">
                  02. Innovation
                </h2>
                <p className="text-base leading-relaxed">
                  We foster a culture of creativity and exploration, encouraging
                  members to push the boundaries of blockchain technology.
                  Collaborative projects enable us to be at the forefront of
                  innovation in the blockchain space.
                </p>
                <Lottie
                  options={ImpactAnimationOptions}
                  height={200}
                  width={200}
                />
              </div>
              <div className="flex flex-col w-full p-4 bg-transparent border shadow rounded text-white">
                <h2 className="text-xl font-bold mb-2 text-center">
                  03. Impact
                </h2>
                <p className="text-base leading-relaxed">
                  We prioritize making a difference with blockchain. Whether
                  it&apos;s increasing transparency or promoting financial
                  inclusion, our goal is to drive positive changes that improve
                  lives. Join us in creating a better future through blockchain
                  innovation.
                </p>
                <Lottie options={MotiveAnimation} height={200} width={200} />
              </div>
            </div>
          </h2>
        </div>
      </div>
    </motion.div>
  );
}

export default Motive;
