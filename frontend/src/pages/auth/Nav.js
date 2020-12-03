import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

export default function Nav() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  let history = useHistory();
  const logout = async () => {
    await auth.signOut();
    dispatch({
      type: "LOGGOUT_USER",
      payload: null,
    });
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light fixed-top trans">
      <Link className="navbar-brand txtclr" to="/">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav ">
          <Link className="nav-link txtclr" to="/">
            Home
          </Link>
          <Link className="nav-link txtclr" to="/about">
            About
          </Link>
          <Link className="nav-link txtclr" to="/shop">
            shop
          </Link>
        </div>
      </div>
      {!user && (
        <div className="form-inline my-2 my-lg-0">
          <Link to="/login" className="mr-sm-2 txtclr">
            Login
          </Link>
          <Link to="/register" className="mr-sm-2 txtclr">
            Register
          </Link>
        </div>
      )}
      {user && (
        <>
          <div
            onClick={logout}
            className="mr-sm-2 txtclr red"
            style={{ cursor: "pointer", color: "red" }}
          >
            {user && user.email && user.email.split("@")[0]}
          </div>
          <div
            onClick={logout}
            className="mr-sm-2 txtclr"
            style={{ cursor: "pointer" }}
          >
            Signout
          </div>
        </>
      )}
    </nav>
  );
}
