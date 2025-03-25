import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "../../../utils/Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restMenuInfo = useRestaurantMenu(id);

  if (restMenuInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="flex min-h-screen">
      {/* 30% Sidebar */}
      <div className="w-3/12 p-4  border-gray-300">
        <div className="m-4 p-4 flex flex-col items-center">
          <h2 className="text-lg mb-4 italic font-bold text-gray-900">
            {restMenuInfo.name}
          </h2>
          {restMenuInfo ? (
            <img
              className="rounded-lg h-56 w-72"
              src={restMenuInfo.image}
              alt={restMenuInfo.name}
            />
          ) : (
            <div className="h-40 bg-gray-300"></div>
          )}
          <p>
            <strong>Cuisine:</strong> {restMenuInfo.cuisine.join(", ")}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {restMenuInfo.rating}
          </p>
          <p>
            <strong>Delivery Time:</strong> {restMenuInfo.deliveryTime}
          </p>
        </div>
      </div>

      {/* 70% Main Content */}
      <div className="w-9/12 p-4">
        <RestaurantCategory id={restMenuInfo.name} />
        {/* <div>
          <h3 className="text-xl font-bold mt-4">Menu</h3>
          <ul className="list-disc list-inside">
            {restMenuInfo.menu.map((item) => (
              <li key={item.id}>
                {item.name} - Rs {item.price}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
