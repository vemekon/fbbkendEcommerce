import React from "react";
import { Link } from "react-router-dom";
import { CardDeals } from "../../component/CardDeals";
import { HomeDetails } from "../../component/HomeDetails";

export const Home = () => {
  return (
    <div className="main-container">
      <HomeDetails />
      <div className="deals">
        <h5>Shop Deals</h5>
        <div className="deals-shop">
          <CardDeals /> <CardDeals /> <CardDeals /> <CardDeals /> <CardDeals />
          <CardDeals />
        </div>
      </div>
      <div className="footer">Copy Right Reserved</div>
    </div>
  );
};
