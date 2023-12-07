import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FMBlog from "./components/FMBlog";
import { useMediaQuery } from "react-responsive";
import News from "./components/News";
import ad from "./assets/img-ad.png";
import Advertisment from "./components/Advertisment";
import Blog from "./components/Blog";
import Twitter from "./components/Twitter";
import Presenter from "./components/Presenter";
import Ringtone from "./components/Ringtone";
import Poll from "./components/Poll";
import footer from "./assets/img-footer-ad.png";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className='bg-bgmain  px-2 md:px-[14vw] overflow-x-hidden'>
        <Header />
        <Hero />
        <div className='flex flex-wrap'>
          <div className='w-screen lg:w-2/3  flex flex-col pr-0 lg:pr-5'>
            <News />
            <Advertisment />
            <Presenter />
            <div className='w-full p-0 flex flex-wrap justify-around'>
              <Ringtone />
              <Poll />
            </div>
          </div>
          <div className='w-full lg:w-1/3 flex flex-col'>
            <FMBlog />
            <img src={ad} className='w-full my-10' alt='' />
            <Blog />
            <Twitter />
          </div>
        </div>
        <img src={footer} className='w-full' alt='' />
      </div>
      <Footer />
    </>
  );
}

export default App;
