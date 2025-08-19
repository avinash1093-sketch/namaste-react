import { CDN_URL } from "../utils/constants";

const RestraurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
  } = resData?.info;
  return (
    <>
      <div className="res-card">
        <img className="res-logo" src={`${CDN_URL}${cloudinaryImageId}`} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.slaString}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </>
  );
};

export default RestraurantCard;
