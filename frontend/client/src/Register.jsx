import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    role: "customer"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formdta", formData);
    const api_url = import.meta.env.VITE_API_URL;
     console.log("api url", api_url);
    try {

      const response = await axios.post(
        `http://localhost:3000/api/users/register`,
        formData
      );

      const data = await response.data;

      console.log(data);
      dispatch(setUser(data));

      navigate('/')

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 shadow-md rounded-lg realative">
      <span className="absolute top-4 left-4">
        <button className='bg-gray-300 p-2 rounded' onClick={() => navigate(-1)}>
          <FaArrowLeftLong />
        </button>
      </span>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 w-[400px] border rounded"
      >

        <h1 className="text-2xl  text-center font-bold">
          Register
        </h1>

        <input
          className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          name="phone"
          placeholder="Enter phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <textarea
          className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="address"
          placeholder="Enter address"
          value={formData.address}
          onChange={handleChange}
          required
        />


        <h4 className="text-lg font-semibold">Choose Role</h4>
        <select
          className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="customer">
            Customer
          </option>

          <option value="seller">
            Seller
          </option>

        </select>

        <button
          className="bg-blue-500 p-2 rounded text-white"
          type="submit"
        >
          Register
        </button>


        <div className="pt-2 text-center">
          <p className="text-gray-500 ">
            Already have an account?   <span className="font-bold text-blue-500 underline" onClick={() => navigate("/signin")}>click here</span>
          </p>
        </div>
      </form>

    </div>
  );
}

export default Register;