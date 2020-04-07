import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./MainRemedioControl.css";

//imagens
import novalgina from "./images-remedios/novalgina.png";
import dalacinC from "./images-remedios/dalacinC.png";
import predsim from "./images-remedios/predsim.jpg";
import generico from "./images-remedios/generico.png";
import { Alert, Button } from "react-bootstrap";

function AlertDismissible() {
  const [show, setShow] = React.useState(true);

  return (
    <div>
      <Alert show={show} variant="danger">
        <Alert.Heading>Atenção!</Alert.Heading>
        <p>Novalgina está chegando ao fim.</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-primary">
            Ok!
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
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  width="100%"
                  height="225"
                  src={novalgina}
                  alt="Novalgina"
                />
                <div className="card-body">
                  <p className="card-text">
                    <b>Data da prescrição: </b> 18/02/2020
                  </p>
                  <p className="card-text">
                    <b>Médico: </b> Dr. André Seiki
                  </p>
                  <p className="card-text">
                    <b>Utilização: </b>Tomar 3x de 8 em 8 horas
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link to={"/receita"}>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                        >
                          Receita
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Editar horário
                      </button>
                    </div>
                    <small className="text-muted">Até 30/04/2020</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img width="100%" height="225" src={dalacinC} alt="Novalgina" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Data da prescrição: </b> 09/01/2020
                  </p>
                  <p className="card-text">
                    <b>Médico: </b> Dr. Luiz Augusto
                  </p>
                  <p className="card-text">
                    <b>Utilização: </b>Tomar 2x de 12 em 12 horas
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Receita
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Editar horário
                      </button>
                    </div>
                    <small className="text-muted">Até 20/03/2020</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img width="100%" height="225" src={predsim} alt="Novalgina" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Data da prescrição: </b> 18/02/2020
                  </p>
                  <p className="card-text">
                    <b>Médico: </b> Dr. Pedro
                  </p>
                  <p className="card-text">
                    <b>Utilização: </b>Tomar 1x ao dia
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Receita
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Editar horário
                      </button>
                    </div>
                    <small className="text-muted">Até 31/05/2020</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img width="100%" height="225" src={generico} alt="Generico" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Data da prescrição: </b> 18/02/2020
                  </p>
                  <p className="card-text">
                    <b>Médico: </b> Dr. Igor
                  </p>
                  <p className="card-text">
                    <b>Utilização: </b>Tomar 3x de 8 em 8 horas
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Receita
                      </button>
                      <button type="button" className="btn btn-sm btn-danger">
                        Terminado
                      </button>
                    </div>
                    <small className="text-muted">Até 30/04/2020</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img width="100%" height="225" src={generico} alt="Generico" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Data da prescrição: </b> 18/02/2020
                  </p>
                  <p className="card-text">
                    <b>Médico: </b> Dr. Igor
                  </p>
                  <p className="card-text">
                    <b>Utilização: </b>Tomar 3x de 8 em 8 horas
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Receita
                      </button>
                      <button type="button" className="btn btn-sm btn-danger">
                        Terminado
                      </button>
                    </div>
                    <small className="text-muted">Até 30/04/2020</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img width="100%" height="225" src={generico} alt="Generico" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Data da prescrição: </b> 18/02/2020
                  </p>
                  <p className="card-text">
                    <b>Médico: </b> Dr. Igor
                  </p>
                  <p className="card-text">
                    <b>Utilização: </b>Tomar 3x de 8 em 8 horas
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Receita
                      </button>
                      <button type="button" className="btn btn-sm btn-danger">
                        Terminado
                      </button>
                    </div>
                    <small className="text-muted">Até 30/04/2020</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img width="100%" height="225" src={generico} alt="Generico" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Data da prescrição: </b> 18/02/2020
                  </p>
                  <p className="card-text">
                    <b>Médico: </b> Dr. Igor
                  </p>
                  <p className="card-text">
                    <b>Utilização: </b>Tomar 3x de 8 em 8 horas
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Receita
                      </button>
                      <button type="button" className="btn btn-sm btn-danger">
                        Terminado
                      </button>
                    </div>
                    <small className="text-muted">Até 30/04/2020</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img width="100%" height="225" src={generico} alt="Generico" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Data da prescrição: </b> 18/02/2020
                  </p>
                  <p className="card-text">
                    <b>Médico: </b> Dr. Igor
                  </p>
                  <p className="card-text">
                    <b>Utilização: </b>Tomar 3x de 8 em 8 horas
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Receita
                      </button>
                      <button type="button" className="btn btn-sm btn-danger">
                        Terminado
                      </button>
                    </div>
                    <small className="text-muted">Até 30/04/2020</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img width="100%" height="225" src={generico} alt="Generico" />
                <div className="card-body">
                  <p className="card-text">
                    <b>Data da prescrição: </b> 18/02/2020
                  </p>
                  <p className="card-text">
                    <b>Médico: </b> Dr. Igor
                  </p>
                  <p className="card-text">
                    <b>Utilização: </b>Tomar 3x de 8 em 8 horas
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Receita
                      </button>
                      <button type="button" className="btn btn-sm btn-danger">
                        Terminado
                      </button>
                    </div>
                    <small className="text-muted">Até 30/04/2020</small>
                  </div>
                </div>
              </div>
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

class MainRemedioControl extends Component {
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

MainRemedioControl.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(MainRemedioControl);
