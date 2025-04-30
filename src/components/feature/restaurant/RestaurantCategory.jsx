import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

import { BASE_URL, FEATURE_API_URLS } from "../../../utils/constants";
import Shimmer from "../../../utils/Shimmer";
import CategoryItem from "./CategoryItem";

const RestaurantCategory = ({ id }) => {
  console.log(id);

  const [categoriesData, setCategoriesData] = useState([]);
  const [toggleAccordian, setToggleAccordian] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          BASE_URL +
            FEATURE_API_URLS.RESTAURANTS_URL +
            FEATURE_API_URLS.CATEGORIES_URL
        );
        console.log("response", response);

        // Ensure correct path to categories
        const regularCards = response?.data || [];
        console.log("regularCards", regularCards);

        // Filter valid category cards
        // const filterDataForCategories = regularCards.filter(
        //   (item) =>
        //     item?.card?.card?.["@type"] ===
        //     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        // );

        setCategoriesData(regularCards);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []); // Include `id` if it's dynamic

  if (categoriesData.length == 0) {
    return <Shimmer />;
  }

  return categoriesData.map((category, index) => (
    <div className="flex flex-col" key={category.id}>
      {/* Use a unique key */}
      <div
        className="cursor-pointer w-9/12 flex justify-between p-3 mx-auto my-2 bg-slate-100 shadow-sm "
        onClick={
          () => setToggleAccordian(toggleAccordian === index ? null : index) // Toggle open/close
        }
      >
        <span className="font-bold text-lg">
          {category.name} ({category.length})
        </span>
        {toggleAccordian === index ? (
          <ChevronUpIcon className="w-6 h-6 text-gray-600" />
        ) : (
          <ChevronDownIcon className="w-6 h-6 text-gray-600" />
        )}
      </div>

      {toggleAccordian === index && (
        <div className="bg-green-100 w-9/12 justify-between p-4 mx-auto">
          {category.map((item) => (
            <CategoryItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  ));
};

export default RestaurantCategory;
