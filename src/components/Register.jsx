import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (
      name === "" ||
      username === "" ||
      dateOfBirth === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("All fields are required!");
    } else if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <Header />
      <div className='min-h-screen flex flex-col items-center justify-start bg-gray-100'>
        <button
          onClick={() => {
            alert(
              `Your Data is: \nName: ${name}\nUsername: ${username}\nDate of Birth: ${dateOfBirth}\nPassword: ${password}\nConfirm Password: ${confirmPassword}`
            );
          }}
          className='border-black border-2 rounded-lg px-8 py-2 my-10'
        >
          Show Data
        </button>
        <div className='bg-white p-8 rounded-lg shadow-md w-80'>
          <h2 className='text-2xl font-semibold mb-4'>Sign Up</h2>
          <form>
            <div className='mb-4'>
              <label htmlFor='name' className='block font-medium'>
                Name
              </label>
              <input
                type='text'
                id='name'
                className='w-full p-2 border rounded-lg'
                placeholder='Enter your name'
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
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
              <label
                htmlFor='dateOfBirth'
                className='block font-medium'
              >
                Date of Birth
              </label>
              <input
                type='date'
                id='dateOfBirth'
                className='w-full p-2 border rounded-lg'
                onChange={(e) => {
                  setDateOfBirth(e.target.value);
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
            <div className='mb-4'>
              <label
                htmlFor='confirmPassword'
                className='block font-medium'
              >
                Confirm Password
              </label>
              <input
                type='password'
                id='confirmPassword'
                className='w-full p-2 border rounded-lg'
                placeholder='Confirm your password'
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
            <button
              onClick={handleSubmit}
              type='button'
              className='w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600'
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
