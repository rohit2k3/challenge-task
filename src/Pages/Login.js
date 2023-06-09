import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom"

const Login = () => {
  
  const loginCheck = localStorage.getItem("loginStatus");
  const Navigate = useNavigate()
  
  const [login, setlogin] = useState({
    email:"",
    password:"",
    loginState:false
  })
  
  useEffect(() => {
    if (loginCheck) {
      Navigate("/dashboard")
    }
  }, [loginCheck])
  

  const handleTextChange = (e) => {
    const {name , value} = e.target
    setlogin(preData => ({
      ...preData,
      [name]:value
    }))
  }

  const loginHandle = () => {
    localStorage.setItem("loginStatus",true)
    Navigate("/dashboard")
  }

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      {/* <ThemePicker /> */}
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <input
          className="text-bgColor text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded bg-textColor"
          type="text"
          placeholder="Email Address"
          name="email"
          onChange={(e) => handleTextChange(e)}
        />
        <input
          className="text-bgColor text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-textColor"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleTextChange(e)}
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span className="text-textColor">Remember Me</span>
          </label>
          <a
            className="text-textColor hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button onClick={loginHandle}
            className="mt-4 bg-bgColor hover:bg-blue-700 px-4 py-2 text-textColor uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-textColor text-center md:text-left">
          Don't have an account? {" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
