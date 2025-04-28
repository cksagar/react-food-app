import RestaurantCard from "./RestaurantCard";

const promotedRestaurantCard = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-slate-400 m-1 p-1 rounded-lg text-white">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default promotedRestaurantCard;
