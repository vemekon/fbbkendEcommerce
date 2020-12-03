import React from "react";
import { Link } from "react-router-dom";

export const HomeDetails = () => {
  return (
    <>
      <div className="main-a">
        <h5> FRESH & ORGANIC</h5>
        Delicious Seasonal Fruits
      </div>

      <div className="main-b">
        <Link to="/shop">
          <button className="bt">Shop</button>
        </Link>
        <Link to="">
          <button className="bt">Contact</button>
        </Link>
      </div>
    </>
  );
};
