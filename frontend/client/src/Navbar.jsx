import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, addToCart } = useSelector((state) => state.user);
 
  return (
    <div className="bg-white h-16 w-full flex items-center justify-between px-4 shadow-md">

      <div className=" flex justify-around space-x-4 w-full text-lg font-medium">

        <button className="text-blue-600 hover:text-blue-800" onClick={() => navigate("/")}>
          Home
        </button>

        {currentUser?.role === 'seller' ? (
          <button className="text-blue-600 hover:text-blue-800" onClick={() => navigate("/add-phone")}>
            Add Mobile
          </button>
        ) : null}

      {currentUser?.role !== 'seller' ? (
        <button className="text-blue-600 hover:text-blue-800 relative" onClick={() => navigate("/mycart")}>
          My Cart <span className="absolute -top-1 -right-3  text-white bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {addToCart?.length}
          </span>
        </button>
      ) : <button className="text-blue-600 hover:text-blue-800" onClick={() => navigate("/myorders")}>
        My Order
      </button>}


      {currentUser?.role !== 'seller' ? (
        <button className="text-blue-600 hover:text-blue-800" onClick={() => navigate("/feedback")}>
          feedback
        </button>
      ) : null}

      {currentUser?.role !== 'seller' ? (<button className="text-blue-600 hover:text-blue-800" onClick={() => navigate("/contact")}>
        contact us
      </button>) : null}


    </div>

    </div >
  );
};
