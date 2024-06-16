import React from 'react'
import { useNavigate } from 'react-router-dom';
import pic2 from '../EvAssets/pic2.jpg';


function Image1() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/page2');
  }
  return (
    <div className="relative border-4 border-black cursor-pointer" onClick={handleClick}>
      <div className="border-4 border-yellow-400">
        <img
          src={pic2}
          alt="Event 1"
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-2">
        <p className="text-black">Event 1</p>
      </div>
    </div>
  )
};

export default Image1
