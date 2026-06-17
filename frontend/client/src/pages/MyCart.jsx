import React from 'react'
import { Navbar } from '../Navbar.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { phones } from '../phones/phone.js'
import { removeFromCart } from '../redux/userSlice.js'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
const MyCart = () => {
  const navigate = useNavigate();
  const { addToCart } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <>
      <Navbar />
        
    <div className="relative">
        <span className="absolute top-4 left-4">
          <button className='bg-gray-300 p-2 rounded' onClick={() => navigate(-1)}>
            <FaArrowLeftLong />
          </button>
        </span>

      <div className=" p-4">
  
        <h2 className="text-2xl font-bold text-center">My Cart</h2>
        {addToCart.length === 0 ? (
          <p className="text-lg text-center">Your cart is empty.</p>
        ) : (
          <div className='flex justify-center gap-4 mt-4'>
            {addToCart.map((item) => (
              <div key={item.id} className="border-b  shadow-md rounded-2xl p-4 w-96   gap-4">
                <div className='flex justify-center'>
                  <img src={item.image} alt={item.name} className="h-40 " />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className="text-medium font-bold">Brand: {item.name}</p>
                  <p className="text-sm font-bold">Price:₹{item.price.toFixed(2)}</p>
                  <p className="text-sm font-bold">Ram: {item?.ram}</p>
                  <p className="text-sm font-bold">Storage: {item?.storage}</p>
                </div>


                <div className='py-2 gap-5'>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded " onClick={() => handleRemove(item.id)}>
                    Remove
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 font-bold text-white py-2 px-2 rounded  m-2" onClick={() => handleRemove(item.id)}>
                    Buy Now
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default MyCart