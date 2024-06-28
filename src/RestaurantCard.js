import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRatingString, deliveryTime, cloudinaryImageId } =
    resData;

  return (
    <div className="restaurant-card">
      <div className="restaurant-img">
        <img
          className="restaurant-image"
          src={ CDN_LINK + cloudinaryImageId}
        />
      </div>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} Stars</h4>
      <h4>{deliveryTime} MINS</h4>
    </div>
  );
};

export default RestaurantCard;
