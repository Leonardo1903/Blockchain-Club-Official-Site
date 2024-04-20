import { ThreeDCardDemo } from "./3DCard.jsx";
import { BackgroundBoxesDemo } from "./BackgroundBoxes.jsx";
import Harsh from "../assets/PanelMembers/Harsh.jpeg"
import Adi from "../assets/PanelMembers/Aditya.jpeg"
import Ansh from "../assets/PanelMembers/Ansh.jpeg"
import Shivangi from "../assets/PanelMembers/Shivangi.jpeg"

const users = [
  {
    name: "Gabrielle Fernandez",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    position: "Marketing Lead",
  },
  {
    name: "Victória Silva",
    image:
      "https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg",
    position: "Back-end developer",
  },
  {
    name: "Ansh Porwal",
    image: Ansh,
    position: "President",
  },
  {
    name: "Siya Pareek",
    image:
      "https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600",
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
    name: "Jordi Santiago",
    image:
      "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    position: "Front-end developer",
  },
  {
    name: "Shivangi",
    image: Shivangi,
    position: "Secretary",
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
