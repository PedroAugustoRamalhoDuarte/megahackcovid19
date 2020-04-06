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
              console.log('Redirect 1'),
              <Redirect to="/" />
            )
        ) : (
            condition === "medico" ? (
              auth.user.role === "medico" ? (
                <Component {...props} />
              ) : (
                  console.log('Redirect 2'),
                  <Redirect to="/" />
                )
            ) : (
                console.log('Redirect 3'),
                <Redirect to="/" />
              )
          )
      ) : (
          console.log('Redirect 4'),
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
