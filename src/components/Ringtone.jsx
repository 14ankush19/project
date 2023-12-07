import React from "react";
import stars from "../assets/img-content-stars.png";

function Ringtone() {
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
          <div className='ringtone-card flex flex-col border-gray-600 p-4 my-3 w-full bg-slate-50 rounded-lg border-2'>
            <h4>Ringtone name in HipHop</h4>
            <img src={stars} alt='' className='w-[6rem]' />
            <div className='ringtone-footer flex flex-row justify-between'>
              <p style={{ fontSize: "smaller" }}>16,472 downloads</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <button className='ringtone-button bg-blue-600 p-1 rounded-lg text-white border-0'>
                  <svg
                    fill='white'
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                  >
                    <path d='M3 22v-20l18 10-18 10z' />
                  </svg>
                </button>
                <button className='ringtone-button bg-blue-400 px-2 rounded-lg'>
                  Download
                </button>
              </div>
            </div>
          </div>
          <div className='ringtone-card flex flex-col border-gray-600 p-4 my-3 w-full bg-slate-50 rounded-lg border-2'>
            <h4>Ringtone name in HipHop</h4>
            <img src={stars} alt='' className='w-[6rem]' />
            <div className='ringtone-footer flex flex-row justify-between '>
              <p style={{ fontSize: "smaller" }}>16,472 downloads</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <button className='ringtone-button bg-blue-600 p-1 rounded-lg text-white border-0'>
                  <svg
                    fill='white'
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                  >
                    <path d='M3 22v-20l18 10-18 10z' />
                  </svg>
                </button>
                <button className='ringtone-button bg-blue-400 px-2 rounded-lg'>
                  Download
                </button>
              </div>
            </div>
          </div>
          <div className='ringtone-card flex flex-col border-gray-600 p-4 my-3 w-full bg-slate-50 rounded-lg border-2'>
            <h4>Ringtone name in HipHop</h4>
            <img src={stars} alt='' className='w-[6rem]' />
            <div className='ringtone-footer flex flex-row justify-between'>
              <p style={{ fontSize: "smaller" }}>16,472 downloads</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <button className='ringtone-button bg-blue-600 p-1 rounded-lg text-white border-0'>
                  <svg
                    fill='white'
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                  >
                    <path d='M3 22v-20l18 10-18 10z' />
                  </svg>
                </button>
                <button className='ringtone-button bg-blue-400 px-2 rounded-lg'>
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ringtone;
