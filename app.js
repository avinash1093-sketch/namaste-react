import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Menu/Nav Items
 * Body
 *  - Search
 *  - Restauranr cintainer
 *    - Restraurant card
 *     - Image
 *     Name of Res, Stars, Cuisine
 * Footer
 *  - Cpoyright
 *  - Links
 *  - Address
 *  - Contact Information
 */

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          <RestraurantCard resName="Meghna Foods" cuisine="Biryani,North Indian" rating="4.4" eta="20"/>
          <RestraurantCard resName="KFC" cuisine="Fast Food, American" rating="4.0" eta="30"/>
        </div>
      </div>
    </>
  );
};

const RestraurantCard = (props) => {
  return (
    <>
      <div
        className="res-card"
        style={{
          backgroundColor: "#f0f0f0",
        }}
      >
        <img
          className="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/7c2b954f-7c5f-41e7-92cb-56a4369e4522_678582.jpg"
        />
        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>{props.rating} stars</h4>
        <h4>{props.eta} minutes</h4>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://dynamic.brandcrowd.com/asset/logo/de2f1188-627e-4b67-a8c3-1a2fc17d783e/logo-search-grid-2x?logoTemplateVersion=2&v=638579027116130000"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <span>© {new Date().getFullYear()} FoodCity. All rights reserved.</span>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
