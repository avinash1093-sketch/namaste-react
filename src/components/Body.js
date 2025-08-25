import { useEffect, useState } from "react";
import RestraurantCard from "./RestraurantCard";
import Shimmer from "./Shimmer";
import { RES_LIST_API_URL } from "../utils/constants";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_API_URL);
    const jsonData = await data.json();
    setListOfRes(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              name="search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <button
              onClick={() => {
                // filter the res card and update the UI
                const filterRes = listOfRes.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRes(filterRes);
              }}
            >
              Search
            </button>
          </div>
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
          {filteredRes.map((restruarant) => (
            <RestraurantCard resData={restruarant} key={restruarant.info.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
