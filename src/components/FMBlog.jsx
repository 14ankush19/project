import React from "react";
import mic from "../assets/img-listen.png";

function App() {
  return (
    <div className=' bg-transparent color-white'>
      <header className='App-header'>
        <h1 className='font-bold text-2xl'>
          Listen to <b className='text-blue-400'>FM</b>Blog
        </h1>
      </header>
      <main>
        <section className='flex'>
          <img src={mic} alt='' />
          <h2 className='ml-3'>
            Tanging you the chance to become ad presenter for at usten
            to hedrado / b2 kip abe the pressing the nation with the
            ter Real Rad pr
          </h2>
        </section>
      </main>
    </div>
  );
}

export default App;
