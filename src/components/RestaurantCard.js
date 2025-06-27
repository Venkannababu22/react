import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  // const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="m-4 p-4 w-[260px] bg-white rounded-xl border border-gray-100 shadow hover:shadow-lg transition duration-200 cursor-pointer">
      <img
        className="rounded-lg w-full h-44 object-cover mb-3"
        alt="card-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg text-gray-900 truncate">{name}</h3>
      <p className="text-sm text-gray-600 truncate mb-2">
        {cuisines.join(", ")}
      </p>

      <div className="flex justify-between items-center text-sm text-gray-700 mt-2">
        <span
          className={`px-2 py-0.5 text-xs font-semibold rounded ${
            avgRating >= 4
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          ⭐ {avgRating}
        </span>
        <span className="text-xs font-medium text-gray-500">{costForTwo}</span>
        <span className="text-xs font-medium text-gray-500">{sla.slaString}</span>
      </div>
    </div>
  );
};

// HOC:
// input - RestaurantCard ==> RestaurantCardPromoted

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label>Promoted</label>
//         <RestaurantCard {...props}/>
//       </div>
//     );
//   };
// };

export default RestaurantCard;
