import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const PrivateRoute = (props) => {
  const { userId, setUserId } = useContext(AuthContext);

  const id = localStorage.getItem("userId");
  if (id) {
    setUserId(id);
  }

  return userId ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
