import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ContactUs from "./components/Contactus.jsx";
import Success from "./components/Success.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
