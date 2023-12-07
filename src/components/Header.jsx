import React, { useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate();

  return (
    <header
      className={`header bg-gray-300 mx-auto flex flex-col justify-between p-2 rounded-xl font-bold`}
    >
      <div className='ad flex md:flex-row gap-5'>
        <img
          src='https://cdn.discordapp.com/attachments/906046057757171732/1147908972859375637/logo.png'
          alt='Logo'
          className='w-20 h-20 md:w-auto md:h-auto'
        />
        <div className='w-full h-fit flex items-center justify-center bg-gray-300 shadow-inner-md text-white'>
          <h1>Advertisement Space</h1>
        </div>
        <div className='xs:flex sm:flex md:flex lg:hidden xl:hidden'>
          <button className='menu-button' onClick={toggleMenu}>
            <Menu />
          </button>
        </div>
      </div>
      <div
        className={`items cursor-pointer lg:flex text-sm xl:text-md flex-col md:flex-row gap-2 xl:gap-5 items-center justify-center text-center bg-gray-300 p-0 lg:p-1 ${
          menuOpen ? "flex" : "hidden"
        } ${menuOpen ? "menu-open" : ""}`}
      >
        <p
          className='item-highlighted bg-blue-500 p-2 md:p-4 rounded-lg text-white'
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>

        <p
          onClick={() => {
            navigate("/contactus");
          }}
        >
          Contact Us
        </p>
        <p
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </p>
        <p
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </p>
      </div>
    </header>
  );
};

export default Header;
