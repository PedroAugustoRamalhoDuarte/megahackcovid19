import React, { Component } from "react";
import './signupComponent.css'

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Cadastro</h3>

                <div className="form-group">
                    <label>Primeiro nome</label>
                    <input type="text" className="form-control" placeholder="João" />
                </div>

                <div className="form-group">
                    <label>Sobrenome</label>
                    <input type="text" className="form-control" placeholder="Rocha" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Ex: cliente@email.com" />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control" placeholder="Ex: onb23b423" />
                </div>


                <div className="form-group">
                    <label>Tipo de usúario</label>
                    <br></br>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="pacienteRadio" value="option1" />
                        <label class="form-check-label" for="pacienteRadio">Paciente</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="medicoRadio" value="option2" />
                        <label class="form-check-label" for="medicoRadio">Médico</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="farmaciaRadio" value="option3" />
                        <label class="form-check-label" for="farmaciaRadio">Farmácia</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-light btn-block">Me cadastrar!</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}