import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createOrUpdateUser } from "../../function/auth";
import { auth } from "../../firebase";

export const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setEmail(window.localStorage.getItem("emailFormRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );

      if (result.user.emailVerified) {
        window.localStorage.removeItem("emailForRegistration");
      }
      let user = auth.currentUser;
      await user.updatePassword(password);
      const idTokenResult = await user.getIdTokenResult();
      console.log(user, idTokenResult);
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
          history.push("/");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const formRegistration = () => (
    <form>
      <h4 className="ml-5">Register</h4>
      <div className="form-group row">
        <label className="col-sm-4 col-form-label">email</label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            disabled
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-4 col-form-label">Password</label>
        <div className="col-sm-8">
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoFocus
          />
        </div>
      </div>

      <div className="form-group row">
        <button className="bt m-6" onClick={handleSubmit}>
          {" "}
          Complete Registeration{" "}
        </button>
      </div>
    </form>
  );

  return <div className="login">{formRegistration()}</div>;
};
