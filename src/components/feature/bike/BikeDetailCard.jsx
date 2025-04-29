import React from "react";
import { Heart, Share2 } from "lucide-react"; // Using Lucide icons for heart and share

const BikeDetailCard = () => {
  return (
    <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
      {/* Bike Image */}
      <div className="w-1/2">
        <img
          src="https://imgd.aeplcdn.com/664x374/n/cw/ec/149405/activa-125-right-front-three-quarter-2.png?isig=0" // Example bike image
          alt="Honda Activa 125"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Bike Details */}
      <div className="w-1/2 p-6 relative flex flex-col justify-between">
        {/* Favorite and Share icons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="text-gray-500 hover:text-red-500">
            <Heart size={20} />
          </button>
          <button className="text-gray-500 hover:text-blue-500">
            <Share2 size={20} />
          </button>
        </div>

        {/* Main Content */}
        <div>
          {/* Bike Name */}
          <h2 className="text-2xl font-bold mb-2">Honda Activa 125</h2>

          {/* Rating and Reviews */}
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <span className="text-yellow-500 font-bold mr-1">4.5★</span>
            <span className="mr-2">(83 Reviews)</span>
            <a href="#" className="text-blue-600 hover:underline ml-2">
              Write Review
            </a>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-4">
            The 2025 Honda Activa 125 gets a new headlight and tons of features
            with the addition of a new 4.2-inch TFT display making it a great
            choice for a family oriented scooter.
          </p>

          {/* Price Details */}
          <div className="text-xl font-bold mb-2">
            ₹82,257 - 99,674 <span className="text-sm text-gray-600">*</span>
          </div>
          <div className="text-sm text-gray-500 mb-4">
            *Ex-showroom price in Delhi &nbsp;
            <a href="#" className="text-blue-600 hover:underline">
              Get On Road Price
            </a>
          </div>

          <div className="text-sm text-blue-600 hover:underline mb-4">
            View Finance Offers (EMI starts from ₹2,765)
          </div>

          {/* View Offers Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 w-full rounded-lg text-lg mb-2">
            View April Offers
          </button>

          {/* Bottom small text */}
          <p className="text-xs text-gray-400 text-center">
            Don't miss out on the best offers this April
          </p>
        </div>
      </div>
    </div>
  );
};

export default BikeDetailCard;
