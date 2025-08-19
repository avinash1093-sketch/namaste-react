import { useState } from "react";
import { resList } from "../utils/mockData";
import RestraurantCard from "./RestraurantCard";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);
  return (
    <>
      <div className="body">
        <div className="search">Search</div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              // filter logic
              const filteredData = listOfRes.filter(
                (elem) => elem.info.avgRating >= 4
              );
              setListOfRes(filteredData);
            }}
          >
            Top Rated Restraurant
          </button>
        </div>
        <div className="res-container">
          {listOfRes.map((restruarant) => (
            <RestraurantCard resData={restruarant} key={restruarant.info.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
