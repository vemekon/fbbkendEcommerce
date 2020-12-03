import React, { useState } from "react";
import { toast } from "react-toastify";

import { auth } from "../../firebase";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  

    var actionCodeSettings = {
      url: "http://localhost:3000/login",

      handleCodeInApp: true,
    };
    await auth.sendPasswordResetEmail(email,actionCodeSettings);
    toast.success(`email is sent to ${email}`);
    setEmail("");
  };
  return (
    <div className="login">
      <form>
        <h4 className="ml-5">Forgot Password</h4>
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
            ForgotPassword{" "}
          </button>
        </div>
      </form>
    </div>
  );
};
