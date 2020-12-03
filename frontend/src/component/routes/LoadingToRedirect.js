import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const LoadingToRedirect = () => {
  const [timer, setTimer] = useState(5);
  const history = useHistory();

  useEffect(() => {
    const init = setInterval(() => {
      setTimer((time) => --time);
      console.log(timer);
    }, 1000);
    timer === 0 && history.push("/");
    return () => clearInterval(init);
  }, [timer]);

  return <div className="m-6">Loading {timer}</div>;
};
