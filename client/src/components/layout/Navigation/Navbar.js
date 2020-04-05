import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../../actions/authActions";

import "./Navbar.css";

function MenuCliente() {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to={"/clientLandpage"}>
          Dashboard Menu
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/"}>
          Minhas receitas
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/"}>
          Agendar consulta
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/"}>
          Médicos cadastrados
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/"}>
          Farmácias cadastradas
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/clienteProfile"}>
          Meu perfil
        </Link>
      </li>
    </ul>
  );
}

const Navbar = ({ component: Component, auth, ...rest }) => {
  return (
    <div className="navbar-fixed">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            Splash!
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              {auth.isAuthenticated === false && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                </li>
              )}
              {auth.isAuthenticated === false && (
                <li className="nav-item active">
                  <Link className="nav-link" to={"/register"}>
                    Cadastre-se
                  </Link>
                </li>
              )}
              {auth.isAuthenticated === true && <MenuCliente />}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

// export default Navbar;

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);