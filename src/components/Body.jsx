import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./feature/restaurant/RestaurantCard";
import promotedRestaurantcard from "./feature/restaurant/promotedRestaurantCard";
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
        <div className="search m-4 p-4 flex items-center space-x-2">
          <div className="relative w-72">
            <input
              type="text"
              className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400 transition pr-10"
              placeholder="Search for Restaurants"
              value={searchText}
              onChange={(event) => setSerchText(event.target.value)}
            />

            {/* "X" Button inside the Input */}
            {searchText && (
              <button
                className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300 hover:text-red-500 transition"
                onClick={() => {
                  setSerchText(""); // Clear input
                  setFilteredRestaurants(restaurantList); // Reset filter
                }}
              >
                ✖
              </button>
            )}
          </div>

          {/* Search Button (Now Inline) */}
          <button
            className="cursor-pointer px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => {
              const filteredRestaurant = restaurantList.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
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
