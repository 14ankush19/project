import React from "react";

function Advertisment() {
  return (
    <div className='flex my-5 justify-evenly lg:justify-between'>
      <div className=' bg-zinc-300 w-[15rem] lg:w-[20rem] h-[15rem] lg:h-[20rem] text-white flex flex-col justify-evenly items-center'>
        <h2 className='text-lg lg:text-4xl font-bold'>
          Advertisment
        </h2>
        <h1 className='text-2xl lg:text-6xl font-bold'>Space</h1>
        <h2 className='text-3xllg:text-7xl font-bold'>250*250</h2>
      </div>
      <div className=' bg-zinc-300 w-[15rem] lg:w-[20rem] h-[15rem] lg:h-[20rem] text-white flex flex-col justify-evenly items-center'>
        <h2 className='text-lg lg:text-4xl font-bold'>
          Advertisment
        </h2>
        <h1 className='text-2xl lg:text-6xl font-bold'>Space</h1>
        <h2 className='text-3xllg:text-7xl font-bold'>250*250</h2>
      </div>
    </div>
  );
}

export default Advertisment;
