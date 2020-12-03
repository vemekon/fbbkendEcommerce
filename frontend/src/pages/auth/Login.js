import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { auth, googleProvider } from "../../firebase";
import { useDispatch } from "react-redux";
import { createOrUpdateUser } from "../../function/auth";

export const Login = ({ history }) => {
  const [email, setEmail] = useState("mesamuel@hotmail.co.uk");
  const [password, setPassword] = useState("1234567");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const idTokenResult = await result.user.getIdTokenResult();
      const user = result.user;
      console.log(idTokenResult, idTokenResult.token);
      setLoading(true);
      createOrUpdateUser(idTokenResult.token)
        .then((res) => {
          console.log(res.data);
          dispatch({
            type: "LOGGED_USER",
            payload: {
              email: res.data.email,
              name: res.data.name,
              role: res.data.role,
              _id: res.data._id,
              token: idTokenResult.token,
            },
          });
          //roleBasedRedirect(res)
          res.data.role === "admin"
            ? history.push("/admin/dashboard")
            : history.push("/user/history");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      const result = await auth.signInWithPopup(googleProvider);
      const idTokenResult = await result.user.getIdTokenResult();
      const user = result.user;
      console.log(user, idTokenResult);

      history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const LoginForm = () => (
    <form>
      <h4 className="ml-5">Login</h4>
      <div className="form-group row">
        <label className="col-sm-4 col-form-label">email</label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-4 col-form-label">password</label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
      </div>
      <div className="form-group row">
        <button className="bt m-6 mb-1" onClick={handleSubmit}>
          {" "}
          Login
        </button>
      </div>
      <div className="form-group row">
        <button className="bt mt-1 bg-primary" onClick={handleGoogle}>
          {" "}
          Google Login
        </button>
        <Link className="float-right m-4 text-danger d-2" to="/forgot/password">
          Forgot passport ?{" "}
        </Link>
      </div>
    </form>
  );

  return <div className="login">{LoginForm()}</div>;
};
