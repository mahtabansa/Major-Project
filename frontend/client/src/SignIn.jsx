import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setUser} from '../src/redux/userSlice.js'
function SignIn() {
const navigate = useNavigate();
const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api_url = import.meta.env.VITE_API_URL;
 
    try {

      const response = await axios.post(
        `http://localhost:3000/api/users/signin`,
        formData ,
        { withCredentials: true }
      );

      const data = await response.data;
       console.log("data",data);
       dispatch(setUser(data))
     
      navigate("/");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 shadow-md rounded-lg">

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 w-[400px] border rounded"
      >
        <h1 className="text-2xl  text-center font-bold">
          Sign In
        </h1>

        <input
          className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="text-center gap-4">
         
             <button
              className="bg-blue-500 p-2 rounded text-white"
              type="submit"
            >
              Sign In
            </button>

          <div className="pt-2">
            <p className="text-gray-500 ">
              Don't have an account?   <span className="font-bold text-blue-500 " onClick={()=>navigate("/register")}>click here</span>
            </p>
          </div>

        </div>

      </form>

    </div>
  );
}

export { SignIn }