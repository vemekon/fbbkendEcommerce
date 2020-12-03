import react, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Home } from "./pages/auth/Home";
import { Login } from "./pages/auth/Login";
import Nav from "./pages/auth/Nav";
import { Register } from "./pages/auth/Register";
import { RegisterComplete } from "./pages/auth/RegisterComplete";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { getCurrentUser } from "./function/auth";
import { UserRoute } from "./component/routes/UserRoute";
import { History } from "./pages/user/History";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        //console.log(user, idTokenResult, "lol");
        getCurrentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_USER",
              payload: {
                name: res.data.name || res.data.email.split("@")[0],
                email: res.data.email,
                _id: res.data._id,
                role: res.data.role,
                token: idTokenResult.token,
              },
            });
          })
          .catch((error) => console.log(error));
      }
      return () => unsubscribe();
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Nav />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/forgot/password" exact component={ForgotPassword} />
        <Route path="/register/complete" exact component={RegisterComplete} />
        <UserRoute path="/user/history" exact component={History} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
