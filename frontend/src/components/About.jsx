import { ThreeDCardDemo } from "./3DCard.jsx";
import { BackgroundBoxesDemo } from "./BackgroundBoxes.jsx";
import Harsh from "../assets/PanelMembers/Harsh.png"
import Adi from "../assets/PanelMembers/Aditya.png"
import Ansh from "../assets/PanelMembers/Ansh.png"
import Shivangi from "../assets/PanelMembers/Shivangi.png"
import Siya from "../assets/PanelMembers/Siya.png";
import NikhilSir from "../assets/PanelMembers/NikhilSir.png";
import AnandSir from "../assets/PanelMembers/AnandSir.png";
import Waris from "../assets/PanelMembers/Waris.png";

const users = [
  {
    name: "Dr. Anand Motwani",
    image: AnandSir,
    position: "Faculty Coordinator",
  },
  {
    name: "Mr. Nikhil Pateria",
    image: NikhilSir,
    position: "Faculty Co-Coordinator",
  },
  {
    name: "Ansh Porwal",
    image: Ansh,
    position: "President",
  },
  {
    name: "Siya Pareek",
    image: Siya,
    position: "Vice President",
  },
  {
    name: "Harsh Balwani",
    image: Harsh,
    position: "Chairman",
  },
  {
    name: "Aditya Chaudhary",
    image: Adi,
    position: "Financial Head",
  },
  {
    name: "Shivangi Choudhary",
    image: Shivangi,
    position: "Secretary",
  },
  {
    name: "Waris Raza Ansari",
    image: Waris,
    position: "Joint Secretary",
  },
];

function About() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-full">
        {/* greetings */}
        <BackgroundBoxesDemo
          heading={"ABOUT US"}
          subheading={
            "We are a team of professionals who are passionate about technology and innovation"
          }
        />
        {/* TEAM */}
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:flex-wrap md:space-x-4 mx-auto md:w-[1182px]">
          {/* First row */}
          <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 w-full">
            {users.slice(0, 2).map((user) => (
              <ThreeDCardDemo
                key={user.name}
                user={user}
                name={user.name}
                image={user.image}
                position={user.position}
              />
            ))}
          </div>
          {/* Second row */}
          <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 w-full">
            {users.slice(2, 5).map((user) => (
              <ThreeDCardDemo
                key={user.name}
                user={user}
                name={user.name}
                image={user.image}
                position={user.position}
              />
            ))}
          </div>
          {/* Third row */}
          <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 w-full">
            {users.slice(5, 8).map((user) => (
              <ThreeDCardDemo
                key={user.name}
                user={user}
                name={user.name}
                image={user.image}
                position={user.position}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
