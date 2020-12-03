import React, { useState } from "react";
import { toast } from "react-toastify";

import { auth } from "../../firebase";

export const Register = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    var actionCodeSettings = {
      url: "http://localhost:3001/register/complete",

      handleCodeInApp: true,
    };
    await auth.sendSignInLinkToEmail(email, actionCodeSettings);
    toast.success(`email is sent to ${email}`);
    window.localStorage.setItem("emailFormRegistration", email);
    setEmail("");
  };
  return (
    <div className="login">
      <form>
        <h4 className="ml-5">Register</h4>
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
          <button className="bt m-6" onClick={handleSubmit}>
            {" "}
            Register{" "}
          </button>
        </div>
      </form>
    </div>
  );
};
