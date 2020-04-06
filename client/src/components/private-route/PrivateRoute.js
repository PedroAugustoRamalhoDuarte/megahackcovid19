import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";



const PrivateRoute = ({ condition, component: Component, auth, ...rest }) => (
  console.log('auth.user.name: ' + auth.user.name),
  console.log('auth.user.role: ' + auth.user.role),
  console.log('auth.user.email:  ' + auth.user.email),
  console.log('condition: ' + condition),
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        condition === "paciente" ? (
          auth.user.role === "paciente" ? (
            <Component {...props} />
          ) : (
              <Redirect to="/" />
            )
        ) : (
            condition === "medico" ? (
              auth.user.role === "medico" ? (
                <Component {...props} />
              ) : (
                  <Redirect to="/" />
                )
            ) : condition === "farmacia" ? (
              auth.user.role === "farmacia" ? (
                <Component {...props} />
              ) : (
                  <Redirect to="/" />
                )
            ) : (
                  <Redirect to="/" />
                )
          )
      ) : (
          <Redirect to="/" />
        )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
