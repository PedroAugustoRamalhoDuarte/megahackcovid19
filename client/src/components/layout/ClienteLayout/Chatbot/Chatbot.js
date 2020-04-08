import React, { Component } from "react";
import { Link } from "react-router-dom";

class Chatbot extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="first-box position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <p>Ao começar o dialogo pergunte qualquer dúvida sobre remédios.</p>
            <button ype="button" class="btn btn-outline-dark">
              <a
                href={
                  "https://webchat.botframework.com/embed/bot-app-id/gemini?b=bot-app-id&s=P-0HZsD95T4.4p6YLDtFqbAT4X2Yct0dANcG5EMViq-Y-1GDQp8cAM4&username=You"
                }
              >
                Começar Dialogo!
              </a>
            </button>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
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

export default Chatbot;
