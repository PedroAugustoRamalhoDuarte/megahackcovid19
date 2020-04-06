import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = props => {
  const { isAuthUser, type } = props;
  if (type === "cliente" && isAuthUser) return <Redirect to="/clientLandPage" />;
  else if (type === "medico" && !isAuthUser) return <Redirect to="/medicoLandPage" />;

  return <Route {...props} />;
};

const mapStateToProps = ({ isAuthUser }) => ({
  isAuthUser
});

export default connect(mapStateToProps)(AuthRoute);