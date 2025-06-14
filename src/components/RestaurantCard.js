import { CDN_URL } from "../utils/constants";


const RestaurantCard = ({ resData }) => {
  // const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData;

  return (
    <div className="res-card">
      <img
        className="card-img"
        alt="card-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
    

  );
};

export default RestaurantCard;
