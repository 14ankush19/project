import React from "react";
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (username === "" && password === "") {
      alert("All fields required!");
    } else {
      navigate("/");
    }
  };
  return (
    <div>
      <Header />{" "}
      <div className='h-screen flex flex-col items-center justify-start bg-gray-100'>
        <button
          onClick={() => {
            alert(
              `Your Data is:\nUsername: ${username}\nPassword: ${password}\n`
            );
          }}
          className='border-black border-2 rounded-lg px-8 py-2 my-10'
        >
          Show Data
        </button>
        <div className='bg-white p-8 rounded-lg shadow-md w-80'>
          <h2 className='text-2xl font-semibold mb-4'>Login</h2>
          <form>
            <div className='mb-4'>
              <label htmlFor='username' className='block font-medium'>
                Username
              </label>
              <input
                type='text'
                id='username'
                className='w-full p-2 border rounded-lg'
                placeholder='Enter your username'
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='block font-medium'>
                Password
              </label>
              <input
                type='password'
                id='password'
                className='w-full p-2 border rounded-lg'
                placeholder='Enter your password'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              onClick={handleSubmit}
              type='submit'
              className='w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600'
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
