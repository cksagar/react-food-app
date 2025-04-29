import { useEffect, useState } from "react";
import { BASE_URL, FEATURE_API_URLS } from "./constants";
import axios from "axios";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const data = await axios(
      BASE_URL + FEATURE_API_URLS.RESTAURANTS_URL + `/${id}`
    );
    setResInfo(data.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
