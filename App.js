import React from "react";
import ReactDOM from "react-dom/client";

/*  FOOD APP STRUCTURE

* Header
* - Logo
* - Nav-Items
* Body
* - Search
* - Resturants Container
* --- Resturant Card
* Footer
* - Copyright
* - Links
* - Address
* - Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://logos-world.net/wp-content/uploads/2020/11/Zomato-Logo.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const tempData = [
  {
    name: "Pizza Hut",
    cloudinaryImageId: "19b555f364f7c5e0db9e815efb078b35",
    locality: "Shivpuri Road",
    areaName: "Civil Lines",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4,
    id: "721",
    avgRatingString: "4.0",
    deliveryTime: 21,
  },
  {
    name: "Dominos",
    cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
    locality: "Shivpuri Road",
    areaName: "Civil Lines",
    costForTwo: "₹350 for two",
    cuisines: ["Burgers", "Hot Dog"],
    avgRating: 4,
    id: "722",
    avgRatingString: "4.9",
    deliveryTime: 23,
  },
  {
    name: "Sandwich Hut",
    cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
    locality: "Shivpuri Road",
    areaName: "Civil Lines",
    costForTwo: "₹350 for two",
    cuisines: ["Sandwich", "Noodles", "French Fries"],
    avgRating: 4,
    id: "723",
    avgRatingString: "3.6",
    deliveryTime: 32,
  },
  {
    name: "Pasta Hut",
    cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
    locality: "Shivpuri Road",
    areaName: "Civil Lines",
    costForTwo: "₹350 for two",
    cuisines: ["Pasta", "Chowmin"],
    avgRating: 4,
    id: "724",
    avgRatingString: "4.4",
    deliveryTime: 26,
  },
];


const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRatingString, deliveryTime, cloudinaryImageId } =
    resData;

  return (
    <div className="restaurant-card">
      <div className="restaurant-img">
        <img
          className="restaurant-image"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
      </div>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} Stars</h4>
      <h4>{deliveryTime} MINS</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search Restaurent</div>
      <div className="restaurant-container">
        {/* <RestaurantCard resData={tempData[0]} />
        <RestaurantCard resData={tempData[1]} />
        <RestaurantCard resData={tempData[2]} />
        <RestaurantCard resData={tempData[3]} /> */}
        {tempData.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />   //We can also pass index as key.
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="root">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
