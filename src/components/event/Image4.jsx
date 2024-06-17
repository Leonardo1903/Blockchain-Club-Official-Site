import { useNavigate } from "react-router-dom";
import pic5 from "../../assets/EvAssets/pic5.jpg";

function Image4() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/page5");
  };
  return (
    <div
      className="relative border-4 border-black cursor-pointer"
      onClick={handleClick}
    >
      <div className="border-4 border-yellow-400">
        <img src={pic5} alt="Event 4" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-2">
        <p className="text-black">Event 4</p>
      </div>
    </div>
  );
}

export default Image4;
