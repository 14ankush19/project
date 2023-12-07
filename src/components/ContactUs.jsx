import React, { useRef } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    navigate("/success");
  };

  return (
    <div>
      <Header />
      <div className='h-screen flex items-center justify-center bg-gray-100'>
        <div className='bg-white p-8 rounded-lg shadow-md w-80'>
          <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='name' className='block font-medium'>
                Name
              </label>
              <input
                type='text'
                id='name'
                className='w-full p-2 border rounded-lg'
                placeholder='Enter your name'
                ref={nameRef}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block font-medium'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full p-2 border rounded-lg'
                placeholder='Enter your email'
                ref={emailRef}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block font-medium'>
                Message
              </label>
              <textarea
                id='message'
                className='w-full p-2 border rounded-lg'
                placeholder='Enter your message'
                ref={messageRef}
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
