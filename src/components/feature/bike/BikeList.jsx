import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BikeCarousalCard from "./BikeCarousalCard";

function BikeList() {
  const scrollRef = useRef(null);

  const bikeData = [
    {
      id: 1,
      name: "sp shine",
      image:
        "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
      description: "asfaf",
      price: 90000,
    },
    {
      id: 2,
      name: "sp shine",
      image:
        "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
      description: "asfaf",
      price: 90000,
    },
    {
      id: 3,
      name: "sp shine",
      image:
        "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
      description: "asfaf",
      price: 90000,
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollLeft +=
        direction === "right" ? scrollAmount : -scrollAmount;
    }
  };

  return (
    <div className="relative w-full px-4">
      {/* Left Arrow */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        onClick={() => scroll("left")}
      >
        <ChevronLeft />
      </button>

      {/* Carousel List */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 py-4 px-8 scrollbar-hide scroll-smooth"
      >
        {bikeData.map((bike, index) => (
          <div key={index} className="min-w-[300px] max-w-[300px]">
            <BikeCarousalCard bike={bike} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        onClick={() => scroll("right")}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default BikeList;
