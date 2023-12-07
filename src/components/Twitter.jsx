import React from "react";
import twitter from "../assets/img-twitter-logo.png";

function Twitter() {
  return (
    <div className='flex flex-col my-10 bg-blue-400 rounded-lg p-10'>
      <img
        src={twitter}
        alt=''
        className='w-1/2 relative top-[-4rem] left-2/4]'
      />
      <div className='bg-white rounded-lg my-3'>
        <p className='p-5'>
          Mobile Boilerplate: a best prafctive baseline for your
          mobile app -{" "}
        </p>
      </div>
      <div className='bg-white rounded-lg'>
        <p className='p-5'>
          Mobile Boilerplate: a best prafctive baseline for your
          mobile app -{" "}
        </p>
      </div>
    </div>
  );
}

export default Twitter;
