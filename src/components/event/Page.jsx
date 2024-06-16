import React from "react";
import pic3 from "../EvAssets/Crypto Carnival 2.jpeg";
import pic4 from "../EvAssets/Crypto Carnival 3.jpeg";
import pic5 from "../EvAssets/Crypto Carnival 4.jpeg";
import pic6 from "../EvAssets/Crypto Carnival 5.jpeg";
import pic7 from "../EvAssets/Crypto Carnival 6.jpeg";
import pic8 from "../EvAssets/Crypto Carnival 7.jpeg";
import pic9 from "../EvAssets/Crypto Carnival 8.jpeg";
import pic10 from "../EvAssets/Crypto Carnival 9.jpeg";
import pic11 from "../EvAssets/Crypto Carnival 10.jpeg";

function Page() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl pb-10">Glimpse of Crypto Carnival Event </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-5">
        <div className="relative border-4 border-black cursor-pointer">
          <div className="border-4 border-yellow-400">
            <img src={pic3} alt="Event 2" className="w-full h-auto" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-2"></div>
        </div>
        <div className="relative border-4 border-black cursor-pointer">
          <div className="border-4 border-yellow-400">
            <img src={pic4} alt="Event 2" className="w-full h-auto" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-2"></div>
        </div>
        <div className="relative border-4 border-black cursor-pointer">
          <div className="border-4 border-yellow-400">
            <img src={pic5} alt="Event 2" className="w-full h-auto" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-2"></div>
        </div>
        <div className="relative border-4 border-black cursor-pointer">
          <div className="border-4 border-yellow-400">
            <img src={pic6} alt="Event 2" className="w-full h-auto" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-2"></div>
        </div>
        <div className="relative border-4 border-black cursor-pointer">
          <div className="border-4 border-yellow-400">
            <img src={pic7} alt="Event 2" className="w-full h-auto" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-2"></div>
        </div>
        <div className="relative border-4 border-black cursor-pointer">
          <div className="border-4 border-yellow-400">
            <img src={pic8} alt="Event 2" className="w-full h-auto" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-2"></div>
        </div>
        <div className="relative border-4 border-black cursor-pointer">
          <div className="border-4 border-yellow-400">
            <img src={pic9} alt="Event 2" className="w-full h-auto" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-2"></div>
        </div>
        <div className="relative border-4 border-black cursor-pointer">
          <div className="border-4 border-yellow-400">
            <img src={pic10} alt="Event 2" className="w-full h-auto" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-2"></div>
        </div>
        <div className="relative border-4 border-black cursor-pointer">
          <div className="border-4 border-yellow-400">
            <img src={pic11} alt="Event 2" className="w-full h-auto" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Page;
