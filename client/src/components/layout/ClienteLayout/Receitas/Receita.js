import React, { Component } from "react";
import { Link } from "react-router-dom";

import ReceitaImg from "./images/receita1.png";

class Receita extends Component {
  render() {
    return (
      <div className="main-div">
        <div className="first-box position-relative text-center">
          <h3>Assinatura digital</h3>
          <h1>
            {" "}
            3c29a97d61412b390ca31120c4526b1fb10891598d948aa520df6a8c54bd705d
          </h1>
          <img
            style={{ width: "50%", heigth: "50%", margin: "30px 0" }}
            src={ReceitaImg}
            alt="pharmacy logo"
          />
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
}

export default Receita;
