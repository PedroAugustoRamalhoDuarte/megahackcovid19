import React, { Component } from "react";
import { Link } from "react-router-dom";

import './signupComponent.css'

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            tipoUsuario: "",
            errors: {}
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleOptionChange = changeEvent => {
        this.setState({
            tipoUsuario: changeEvent.target.value
        })
    }


    onSubmit = e => {
        e.preventDefault()
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            tipoUsuario: this.state.tipoUsuario
        }
        console.log(newUser)
    }

    render() {
        const { errors } = this.state
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form noValidate onSubmit={this.onSubmit}>
                        <h3>Cadastro</h3>

                        <div className="form-group">
                            <label>Nome</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.name}
                                error={errors.name}
                                id="name"
                                type="text"
                                className="form-control"
                                placeholder="João Lima" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="Ex: cliente@email.com" />
                        </div>

                        <div className="form-group">
                            <label>Senha</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                                className="form-control"
                                placeholder="Ex: onb23b423" />
                        </div>

                        <div className="form-group">
                            <label>Confirmar senha</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.password2}
                                error={errors.password2}
                                id="password2"
                                type="password"
                                className="form-control"
                                placeholder="Ex: onb23b423" />
                        </div>


                        <div className="form-group">
                            <label>Tipo de usúario</label>
                            <br></br>
                            <div className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    name="inlineRadioOptions"
                                    value="paciente"
                                    checked={this.state.tipoUsuario === "paciente"}
                                    onChange={this.handleOptionChange}
                                    className="form-check-input"
                                />
                                <label className="form-check-label" htmlFor="pacienteRadio">Paciente</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    name="inlineRadioOptions"
                                    value="medico"
                                    checked={this.state.tipoUsuario === "medico"}
                                    onChange={this.handleOptionChange}
                                    className="form-check-input"
                                />
                                <label className="form-check-label" htmlFor="medicoRadio">Médico</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    name="inlineRadioOptions"
                                    value="farmacia"
                                    checked={this.state.tipoUsuario === "farmacia"}
                                    onChange={this.handleOptionChange}
                                    className="form-check-input"
                                />
                                <label className="form-check-label" htmlFor="farmaciaRadio">Farmácia</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-light btn-block">Me cadastrar!</button>
                        <p className="forgot-password text-right">
                            Already registered? <Link to={"/sign-in"} >sign in</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;