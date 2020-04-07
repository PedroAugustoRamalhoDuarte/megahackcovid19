import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Alert, Button } from 'react-bootstrap'

import "./ClientLayout.css";
import Remedio from "../../../images/medicine.png";
import Pharmacy from "../../../images/pharmacy.png";
import dalacinC from './RemedioControl/images-remedios/dalacinC.png'

function AlertDismissible() {
  const [show, setShow] = React.useState(true);


  return (
    <div>
      <Alert show={show} variant="info">
        <Alert.Heading>Dalacin C</Alert.Heading>
        <p>
          Tomar um coprimido.
        </p>
        <p><b>12:00</b></p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-primary">
            Tomado!
          </Button>
        </div>
      </Alert>
    </div>
  );
}


// Navigation
function Artefatos() {
  return (
    <div className="main-div">
      <div className="first-box position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Bem vindo!</h1>
          <p className="lead font-weight-normal">
            Como você ja deve saber o nosso objetivo é conectar médicos,
            pacientes, farmácias e laboratórios de todo o Brasil através de uma
            plataforma de Telemedicina inteligente e completa. E o mais
            importante, o nosso maior objetivo é lhe trazer segurança e saúde.
          </p>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-light ml-md-5 mr-md-auto pt-3 px-3 pt-md-4 px-md-4 text-center overflow-hidden">
          <div className="my-5 p-5">
            <h2 className="display-5">Análise dos remédios utilizados</h2>
          </div>
          <div
            className="bg-dark shadow-sm mx-auto"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          >
            <div>
              <Link to={"/analiseRemedio"}>
                <img
                  className="remedio-image"
                  src={Remedio}
                  alt="remedio logo"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-light mr-md-5 pt-3 px-3 pt-md-4 px-md-4 text-center overflow-hidden">
          <div className="my-5 p-5">
            <h2 className="display-5">Análise de farmácias preferidas</h2>
          </div>
          <div
            className="bg-dark shadow-sm mx-auto"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          >
            <div>
              <Link to={"/analiseFarmacia"}>
                <img
                  className="remedio-image"
                  src={Pharmacy}
                  alt="pharmacy logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            <p>DocBe!</p>
            <small className="d-block mb-3 text-muted">© 2020-2021</small>
          </div>

          <div className="col-6 col-md">
            <h5>Sobre</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-muted" to={"/"}>
                  Time
                </Link>
              </li>
              <li>
                <Link className="text-muted" to={"/"}>
                  Localização
                </Link>
              </li>
              <li>
                <Link className="text-muted" to={"/"}>
                  Privacidade
                </Link>
              </li>
              <li>
                <Link className="text-muted" to={"/"}>
                  Termos
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h5>Contato</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-muted" to={"/"}>
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="text-muted" to={"/"}>
                  Facebook
                </Link>
              </li>
              <li>
                <Link className="text-muted" to={"/"}>
                  Github
                </Link>
              </li>
              <li>
                <Link className="text-muted" to={"/"}>
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

class ClientLandpage extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div>
        <AlertDismissible />
        <Artefatos />
      </div>
    );
  }
}

ClientLandpage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(ClientLandpage);
