function BikeCarousalCard({ bike }) {
  return (
    <div className=" card m-4 p-4 w-70 rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        src={bike.image}
        alt={bike.name}
        className="w-80 h-50 border-2 bg-clip-padding rounded-lg shadow-lg"
      />
      <h2 className="bike-name">{bike.name}</h2>
      <p className="bike-description">{bike.description}</p>
      <p className="bike-price">${bike.price}</p>
    </div>
  );
}

export default BikeCarousalCard;
