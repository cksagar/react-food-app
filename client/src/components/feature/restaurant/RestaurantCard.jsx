import { useState } from "react";

const RestaurantCard = (props) => {
  const { name, cuisine, image, rating, deliveryTime } = props.resData;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <div className="w-full h-[120px] bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          className="w-full h-full object-cover"
          alt="res-logo"
          src={
            imgError
              ? "https://via.placeholder.com/200x120?text=No+Image"
              : image
          }
          onError={() => setImgError(true)}
        />
      </div>
      <h3 className="text-lg italic font-bold text-gray-900 mt-2">{name}</h3>
      <p className="res-rating">Rating: ⭐{rating}</p>
      <p className="res-time">Delivery Time: {deliveryTime}</p>
      <p className="res-cuisine">{cuisine}</p>
    </div>
  );
};

export default RestaurantCard;
