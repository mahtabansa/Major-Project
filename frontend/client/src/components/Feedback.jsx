import React from 'react'
import { Navbar } from '../Navbar.jsx'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
const Feedback = () => {
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

    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow">
  <h2 className="text-2xl font-semibold text-center mb-6">
    Feedback
  </h2>

  <form className="space-y-4">
    <div>
      <label className="block mb-1 font-medium">
        Name
      </label>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">
        Email
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block mb-1 font-medium">
        Feedback
      </label>
      <textarea
        rows="4"
        placeholder="Write your feedback..."
        className="w-full border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      onClick={() => navigate('/feedback-confirmation')}
    >
      Submit Feedback
    </button>
  </form>
</div>
    </>

  )
}

export default Feedback