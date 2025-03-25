import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, {
  promotedRestaurantcard,
} from "./feature/restaurant/RestaurantCard";
import RestaurantFilter from "./feature/restaurant/RestaurantFilter";
import { BASE_URL, API_URLS } from "../utils/constants";

const Body = () => {
  const [restaurantList, setRestaurantsList] = useState([]);
  const [searchText, setSerchText] = useState("");

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const PromotedRestaurantCard = promotedRestaurantcard(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function getData() {
    const data = await fetch(BASE_URL + API_URLS.RESTAURANTS_URL);
    const restaurants = await data.json();
    setRestaurantsList(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const handleFilterToggle = (isFiltered) => {
    if (isFiltered) {
      setFilteredRestaurants(restaurantList.filter((res) => res.rating >= 4));
    } else {
      setFilteredRestaurants(restaurantList);
    }
  };

  return (
    <div className="body">
      <div className="flex items-center justify-evenly">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="w-72 m-2 px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400 transition"
            placeholder="Search for Restaurants"
            value={searchText}
            onChange={(event) => {
              setSerchText(event.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredRestaurant = restaurantList.filter((res) => {
                return res.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <RestaurantFilter
            restaurantList={filteredRestaurants}
            onFilterToggle={handleFilterToggle}
          />
        </div>
      </div>
      <div className="p-4 m-4 flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurant/" + restaurant.id}>
            {restaurant.promoted ? (
              <PromotedRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
