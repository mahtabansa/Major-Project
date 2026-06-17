import React from "react";
import { Navbar } from "../Navbar";

function Contact() {
  return (
    <>
    <Navbar/>
   
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        
        <h1 className="text-3xl font-bold text-center mb-2">
          Contact Us
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Have questions, suggestions, or need help? We'd love to share with you.
        </p>

        <div className="space-y-6">
          
          <div className="border-b pb-4">
            <h2 className="text-lg font-semibold">
              📧 Email Support
            </h2>
            <p className="text-gray-600">
              support@mobilemart.com
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-lg font-semibold">
              📞 Phone Support
            </h2>
            <p className="text-gray-600">
              +91 123-456-7890
            </p>
            <p className="text-gray-600">
              +91 987-654-3210
            </p>
          
            
          </div>

          <div className="border-b pb-4">
            <h2 className="text-lg font-semibold">
              🕒 Business Hours
            </h2>
            <p className="text-gray-600">
              Monday - Saturday
            </p>
            <p className="text-gray-600">
              9:00 AM - 6:00 PM
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-lg font-semibold">
              📍 Address
            </h2>
            <p className="text-gray-600">
              Bhopal, Madhya Pradesh, India
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              💬 Need Immediate Help?
            </h2>
            <p className="text-gray-600">
              For urgent issues regarding orders, listings, or account access,
              please contact us by phone or email. Our team will respond as
              quickly as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
     </>
  );
}

export default Contact;