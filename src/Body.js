import RestaurantCard from "./RestaurantCard";
import tempData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State Variable - Super powerful variable
  let [listOfRestaurant, setlistOfRestaurant] = useState(tempData);

  // Normal JS variable
  // let listOfRestaurant = [
  //   {
  //     name: "Pizza Hut",
  //     cloudinaryImageId: "19b555f364f7c5e0db9e815efb078b35",
  //     cuisines: ["Pizzas"],
  //     avgRating: 4,
  //     id: "721",
  //     avgRatingString: "4.0",
  //     deliveryTime: 21,
  //   },
  //   {
  //     name: "Dominos",
  //     cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
  //     cuisines: ["Burgers", "Hot Dog"],
  //     avgRating: 4,
  //     id: "722",
  //     avgRatingString: "4.9",
  //     deliveryTime: 23,
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic here
            filteredList = listOfRestaurant.filter(
              (res) => res.avgRatingString > "4"
            );
            setlistOfRestaurant(filteredList)
          }}
        >
          Top-rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} /> //We can also pass index as key.
        ))}
      </div>
    </div>
  );
};

export default Body;
