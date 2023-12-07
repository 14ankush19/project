import React from "react";
import girl from "../assets/img-content-present.png";

function Presenter() {
  return (
    <div>
      <div style={{ marginTop: 20 }} className='presenter my-10'>
        <h2 className='flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={15}
            height={15}
            className='text-blue-400'
            viewBox='0 0 24 24'
          >
            <path d='M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z' />
          </svg>
          Presenter of the month
        </h2>
        <div
          className='flex flex-row flex-wrap justify-center'
          style={{
            backgroundColor: "#0088c3",
            borderRadius: 10,
            display: "flex",
            color: "white",
          }}
        >
          <img src={girl} className='w-[30rem] lg:w-1/3' />
          <div className='my-5 w-2/3'>
            <h2 className='text-2xl font-bold'>
              Presenter of the month heading text
            </h2>
            <p className='my-10'>
              Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Facere, suscipit rerum, doloribus iste ipsa
              eligendi eaque aspernatur ipsum officia non aut alias
              reprehenderit nesciunt fugit eum fuga voluptates ipsam
              modi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presenter;
