import React from 'react'
import { Navbar } from '../Navbar'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
const MyOrder = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="relative">
        <span className="absolute top-4 left-4">
          <button className='bg-gray-300 p-2 rounded' onClick={() => navigate(-1)}>
            <FaArrowLeftLong />
          </button>
        </span>
      </div>

      <div className='text-center p-4'>
        <h2 className="text-2xl font-bold">My Order</h2>
        <p className="text-lg mt-4">You have no orders yet.</p>
      </div>
    </>

  )
}

export default MyOrder