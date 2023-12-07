import React from "react";
import stars from "../assets/img-content-stars.png";

function Poll() {
  return (
    <div className='w-full lg:w-2/5 my-5'>
      <div className='w-full lg:w-full'>
        <h2 className='flex items-center text-2xl font-bold '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={12}
            height={12}
            viewBox='0 0 24 24'
          >
            <path d='M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z' />
          </svg>
          {"    "}
          <b className='text-blue-400 mx-3'>{"   "} Get </b> ringtones
        </h2>
        <div className='ringtone bg-gray-200 p-5 w-full rounded-xl'>
          <div className='ringtone-card flex flex-col border-gray-600 border-2 p-4 my-3 w-full bg-slate-50 rounded-lg'>
            <h4>Whats your favourite gadget</h4>
          </div>
          <div className='flex items-center justify-start my-8'>
            <input
              className='h-[1rem] w-[1rem] border-0 mx-2'
              type='radio'
              name=''
              id=''
            />{" "}
            <span>Mobile</span>
          </div>
          <div className='flex items-center justify-start my-8'>
            <input
              className='h-[1rem] w-[1rem] border-0 mx-2'
              type='radio'
              name=''
              id=''
            />{" "}
            <span>Laptop</span>
          </div>
          <div className='flex items-center justify-start my-8'>
            <input
              className='h-[1rem] w-[1rem] border-0 mx-2'
              type='radio'
              name=''
              id=''
            />{" "}
            <span>Camera</span>
          </div>
          <div className='flex items-center justify-start my-8'>
            <input
              className='h-[1rem] w-[1rem] border-0 mx-2'
              type='radio'
              name=''
              id=''
            />{" "}
            <span>MP3 Player</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poll;
