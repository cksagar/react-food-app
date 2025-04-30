import BikeSearchCard from "./BikeSearchCard";
import BikeList from "./BikeList";

function BikeSearchPage() {
  return (
    <div className=" justify-center items-center min-h-screen p-5 bg-gray-100">
      <BikeSearchCard />
      <BikeList />
    </div>
  );
}

export default BikeSearchPage;
