import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { LoadingToRedirect } from "./LoadingToRedirect";

export const UserRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => ({ ...state }));
  console.log(user && user.token);
  return user && user.token ? (
    <Route {...rest} render={() => children} />
  ) : (
    <div style={{ background: "red", height: "100vh", marginTop: "5rem" }}>
      <LoadingToRedirect />
    </div>
  );
};
