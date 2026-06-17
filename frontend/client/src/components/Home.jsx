import React from 'react'
import { Navbar } from '../Navbar.jsx'
import { phones } from '../phones/phone.js'
import { useSelector } from 'react-redux'
import { setAddToCart } from '../redux/userSlice.js'
import { useDispatch } from 'react-redux'
import advertising from '../assets/advertising.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [showMore, setshowMore] = React.useState(false)
  const { currentUser, items } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    try {
      const item = await axios.post(`${import.meta.env.VITE_API_URL}/api/items/delete-item/${id}`, {}, { withCredentials: true });
      console.log("items deleted", item)
    } catch (err) {
      console.log("error occuring while deleting item", err)
    }
  }

  return (

    <>
      <Navbar />
      {currentUser?.role !== 'seller' && (
        <div className="flex mt-4 gap-4 p-4">
          <div className='h-screen w-full flex flex-wrap gap-4 justify-center items-center'>

            {phones.map((phone) => (
              <div key={phone.id} className="w-64 h-96 bg-white shadow-md rounded-lg overflow-hidden">
                <img src={phone.image} alt={phone.name} className="w-full h-48 " />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{phone.name}</h3>
                  <p className="text-xl font-bold">₹{phone.price.toFixed(2)}</p>
                  <p className={showMore ? "" : "line-clamp-2"}>
                    {phone.description}
                  </p>

                </div>

                <div className='flex justify-around py-4 gap-4 '>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                    onClick={() => dispatch(setAddToCart(phone))}
                  >
                    Add to Cart
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded ml-2">
                    Buy Now
                  </button>
                </div>
              </div>

            ))}
          </div>

        </div>
      )}

      <div >
        {currentUser?.role === 'seller' ? <div className='w-full h-full flex items-center justify-center p-4'>
          <img src={advertising} alt="Description of the image" />
        </div> :null}

        {
          !currentUser ? (
            <div className='w-full h-full flex items-center justify-center p-4'>
              <button className='bg-blue-500 p-2 rounded text-white' onClick={() => navigate('/signin')}>
                Sign In
              </button>
              <button className='bg-green-500 p-2 rounded text-white ml-4' onClick={() => navigate('/register')}>
                Register
              </button>
            </div>
          ) : null }


        {currentUser?.role === 'seller' && items?.length === 0 ? (
          < div className='w-full h-full flex items-center justify-center p-4'>
            <div className='w-70 h-40 flex flex-col h-full p-4  bg-gray-200  rounded-lg shadow-lg '>
              <span className='text-center font-medium'>Sell your first mobile </span>
              <button className='rounded-xl mt-4 bg-blue-500 text-white p-2' onClick={() => navigate('/add-phone')}>Add Mobile</button>
            </div>
          </div>

        ) : null}




        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {items?.length > 0 && items?.map((phone) => (
            <div
              key={phone._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={phone.image}
                alt={phone.name}
                className="w-full h-36 "
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {phone?.name}
                </h3>

                <div className="mt-2 space-y-1">
                  <p className="text-gray-600">
                    RAM: <span className="font-medium">{phone?.ram}</span>
                  </p>

                  <p className="text-gray-600">
                    Storage:{" "}
                    <span className="font-medium">{phone?.storage} GB</span>
                  </p>
                </div>

                <p className="text-xl font-bold text-green-600 mt-2">
                  ₹{phone?.price}
                </p>

                <p className="text-sm text-gray-500 mt-2 line-clamp-2 truncate">
                  {phone?.description}
                </p>

                <div className="flex gap-3 mt-5">
                  <button
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-1 rounded-lg font-medium transition" onClick={() => handleDelete(phone._id)}
                  >
                    Delete
                  </button>

                  <button
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



    </>
  )
}



export default Home