import { BackgroundBoxesDemo } from "./BackgroundBoxes";
import { SignupFormDemo } from "./Form";
import ContactAnimationJson from "../assets/ContactAnimationData.json";
import Lottie from "react-lottie";

function Contact() {

    const ContactAnimationOptions = {
      loop: true, 
      autoplay: true, 
      animationData: ContactAnimationJson, 
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
  };

  return (
    <div className="h-full w-full">
      <BackgroundBoxesDemo/>
      <div className="bg-black">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* contact from */}
            <SignupFormDemo />
            <Lottie options={ContactAnimationOptions} height={400} width={400} />
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Contact;
