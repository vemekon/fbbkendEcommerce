import React from "react";
import UserNav from "./UserNav";

export const History = () => {
  return (
    <div style={{ height: "100vh", marginTop: "4rem" }}>
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col-md-10">History</div>
      </div>
    </div>
  );
};
