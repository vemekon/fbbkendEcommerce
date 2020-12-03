import React from "react";
import { Link } from "react-router-dom";

export const CardDeals = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem", height: "20rem" }}>
        <img
          src="https://images.unsplash.com/photo-1516705322007-b0586a7a92fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <Link to="/">
            <h6 className="card-title">Card title</h6>
            <p className="card-text">Some quick example</p>
          </Link>
        </div>
      </div>
    </>
  );
};
