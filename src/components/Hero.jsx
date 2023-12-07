import React from "react";
import img from "../assets/img-header-main.png";
import NowPlaying from "./NowPlaying";
function Hero() {
  return (
    <div className='w-full my-5 flex flex-wrap '>
      <div className='w-full lg:w-2/3 h-full pr-5'>
        <img src={img} className='w-full h-[20rem]' alt='' />
        <h1
          className={`relative bottom-14 left-5  text-md lg:text-2xl text-blue-400`}
        >
          No one ever promised you an easy life.
        </h1>
      </div>

      <NowPlaying />
    </div>
  );
}
export default Hero;
