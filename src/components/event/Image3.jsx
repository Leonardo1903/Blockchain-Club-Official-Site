import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic4 from '../EvAssets/pic4.jpg';
function Image3() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/page4');
  };
  return (
    <div className="relative border-4 border-black cursor-pointer" onClick={handleClick}>
      <div className="border-4 border-yellow-400">
        <img
          src={pic4}
          alt="Event 3"
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-2">
        <p className="text-black">Event 3</p>
      </div>
    </div>
  )
}

export default Image3
