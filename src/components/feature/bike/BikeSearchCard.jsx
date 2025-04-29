import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BikeSearchCard = () => {
  const [activeTab, setActiveTab] = useState("new");
  const [searchBy, setSearchBy] = useState("brand");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchByChange = (type) => {
    setSearchBy(type);
  };

  const handleSearch = () => {
    console.log("Search clicked!", {
      activeTab,
      searchBy,
      selectedBrand,
      selectedModel,
    });
    // Navigate to the details page with search parameters
    navigate(`/bike-details`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-[320px]">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Search the right bike
      </h2>

      {/* Tabs */}
      <div className="flex mb-4">
        <button
          onClick={() => handleTabChange("new")}
          className={`flex-1 p-2 rounded-l-lg font-semibold ${
            activeTab === "new"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          New Bike
        </button>
        <button
          onClick={() => handleTabChange("used")}
          className={`flex-1 p-2 rounded-r-lg font-semibold ${
            activeTab === "used"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Used Bike
        </button>
      </div>

      {/* Radio buttons */}
      <div className="flex items-center mb-4">
        <label className="flex items-center mr-4 cursor-pointer">
          <input
            type="radio"
            name="searchBy"
            value="brand"
            checked={searchBy === "brand"}
            onChange={() => handleSearchByChange("brand")}
            className="mr-2"
          />
          <span className="text-red-500 font-semibold">By Brand</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="searchBy"
            value="budget"
            checked={searchBy === "budget"}
            onChange={() => handleSearchByChange("budget")}
            className="mr-2"
          />
          <span className="text-gray-700 font-semibold">By Budget</span>
        </label>
      </div>

      {/* Dropdowns */}
      <div className="mb-4">
        <select
          className="w-full p-2 mb-2 border rounded-md"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">Select Brand</option>
          <option value="Honda">Honda</option>
          <option value="Yamaha">Yamaha</option>
          <option value="Bajaj">Bajaj</option>
        </select>

        <select
          className="w-full p-2 border rounded-md"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          <option value="">Select Model</option>
          <option value="CBR">CBR</option>
          <option value="FZ">FZ</option>
          <option value="Pulsar">Pulsar</option>
        </select>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg"
      >
        Search
      </button>

      {/* Advanced Search */}
      <div className="text-right mt-2">
        <a href="#" className="text-sm text-gray-500 hover:underline">
          Advanced Search →
        </a>
      </div>
    </div>
  );
};

export default BikeSearchCard;
