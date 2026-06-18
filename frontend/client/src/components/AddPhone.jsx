import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { setUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import { FaArrowLeftLong } from "react-icons/fa6";

function AddPhone() {
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const [FrontendImage, setFrontendImage] = useState(null);
      const [BackendImage, setBackendImage] = useState(null);
      const [loading, setLoading] = useState(false);
      const [preview, setPreview] = useState(null);
      const [formData, setFormData] = useState({
            name: "",
            ram: "",
            storage: "",
            price: "",
            description: "",
      });

      const handleChange = (e) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value
            });
      };


      const handleImage = (e) => {
            try {
                  const file = e.target.files[0];

                  if (!file) return;

                  setBackendImage(file);

                  setFrontendImage(URL.createObjectURL(file));
                  console.log("BackendImage:", BackendImage);
            } catch (err) {
                  console.log("handle image is not working");
            }
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                  setLoading(true);

                  const data = new FormData();

                  data.append("name", formData.name);
                  data.append("ram", formData.ram);
                  data.append("storage", formData.storage);
                  data.append("price", formData.price);
                  data.append("description", formData.description);
                  data.append("image", BackendImage);

                  console.log("FormData:", data);

                  const response = await axios.post(
                        `https://major-project-1-backend.onrender.com/api/items/add-phone`,
                        data,
                        {

                              withCredentials: true,
                        }
                  );

                  console.log(response.data);

                  navigate("/");
            } catch (error) {
                  console.log(error);
            } finally {
                  setLoading(false);
            }
      };
      return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100 shadow-md rounded-lg">
                  <span className="absolute top-4 left-4">
                        <button className='bg-gray-300 p-2 rounded' onClick={() => navigate(-1)}>
                              <FaArrowLeftLong />
                        </button>
                  </span>
                  <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-2 p-6 w-[400px] border rounded"
                  >

                        <h1 className="text-2xl  text-center font-bold">
                              List your New Mobile
                        </h1>
                        <label htmlFor="name" className="font-medium">Name</label>
                        <input
                              className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              type="text"
                              name="name"
                              placeholder="Enter name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                        />

                        <label htmlFor="name" className="font-medium">Image</label>

                        <input
                              className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              type="file"
                              name="image"
                              accept="image/*"
                              onChange={handleImage}
                              required
                        />

                        <label htmlFor="name" className="font-medium">Ram</label>
                        <input
                              className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              type="text"
                              name="ram"
                              placeholder="phone ram"
                              value={formData.ram}
                              onChange={handleChange}
                              required
                        />

                        <label htmlFor="name" className="font-medium">Storage</label>
                        <input
                              className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              type="number"
                              name="storage"
                              placeholder="phone storage"
                              value={formData.storage}
                              onChange={handleChange}
                              required
                        />

                        <label htmlFor="name" className="font-medium">Price</label>
                        <input
                              className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              type="text"
                              name="price"
                              placeholder="phone price"
                              value={formData.price}
                              onChange={handleChange}
                              required
                        />

                        <label htmlFor="description" className="font-medium">Description</label>
                        <textarea
                              className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              name="description"
                              placeholder="Write phone Description"
                              value={formData.description}
                              onChange={handleChange}
                              required
                        />




                        <button
                              className="bg-blue-500 p-2 rounded text-white"
                              type="submit" onClick={handleSubmit}
                        >
                              {loading ? <ClipLoader color="#fff" size={20} /> : "Add Phone"}
                        </button>


                  </form>

            </div>
      );
}

export default AddPhone;
