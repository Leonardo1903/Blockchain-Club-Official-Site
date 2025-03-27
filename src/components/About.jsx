import { ThreeDCardDemo } from "./3DCard.jsx";
import { BackgroundBoxesDemo } from "./BackgroundBoxes.jsx";
import {
  HemrajSir,
  NikhilSir,
  Agnibha,
  Aryan,
  Harsh,
  Omanshi,
} from "../assets/PanelMembers";
import Teams from "./Team/Teams";

const users = [
  {
    name: "Dr. Hemraj S Lamkuche",
    image: HemrajSir,
    position: "Faculty Coordinator",
  },
  {
    name: "Agnibha Chakraborty",
    image: Agnibha,
    position: "President",
  },
  {
    name: "Omanshi Kaushal",
    image: Omanshi,
    position: "Vice President",
  },
  {
    name: "Aryan Sharma",
    image: Aryan,
    position: "Chairman",
  },
  {
    name: "Harsh Kushwah",
    image: Harsh,
    position: "Financial Head",
  },
];

function About() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-full">
        <BackgroundBoxesDemo
          heading={"ABOUT US"}
          subheading={
            "We are a team of professionals who are passionate about technology and innovation"
          }
        />
        {/* Panel */}
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:flex-wrap md:space-x-4 mx-auto md:w-[1182px]">
          {/* First row */}
          <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 w-full">
            {users.slice(0, 1).map((user) => (
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
            {users.slice(1, 3).map((user) => (
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
            {users.slice(3, 6).map((user) => (
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

        {/* Team */}
        <Teams />
      </div>
    </div>
  );
}

export default About;
