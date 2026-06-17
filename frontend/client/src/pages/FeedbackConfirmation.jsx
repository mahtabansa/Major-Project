import React from "react";
import { Link } from "react-router-dom";

function FeedbackConfirmation() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        
        <div className="text-green-500 text-6xl mb-4">
          ✓
        </div>

        <h1 className="text-3xl font-bold mb-2">
          Thank You!
        </h1>

        <p className="text-gray-600 mb-6">
          Your feedback has been submitted successfully.
          We appreciate your time and suggestions.
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default FeedbackConfirmation;