import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestruarantMenu = () => {
  const [restaurantInfo, setSestaurantInfo] = useState(null);
  const [menuList, setMenuList] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL.replace("<RES_ID>", resId));
    const jsonData = await data.json();
    setSestaurantInfo(jsonData?.data?.cards[2]?.card?.card?.info);
    setMenuList(
      jsonData?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[1].card
        .card.itemCards
    );
  };

  return restaurantInfo === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="restaurant-menu">
        <h1>{restaurantInfo.name}</h1>
        <h3>{restaurantInfo.cuisines.join(", ")}</h3>
        <h3>{restaurantInfo.costForTwoMessage}</h3>
        <h2>Menu</h2>
        {menuList.map((menu, index) => (
          <div className="menu-card" key={index}>
            <ul>
              <li>
                {menu.card.info.name} - Rs.{" "}
                {menu.card.info.defaultPrice / 100 ||
                  menu.card.info.price / 100}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
export default RestruarantMenu;
