import React, { Component } from "react";
import './loginComponent.css'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(userData)
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form noValidate onSubmit={this.onSubmit} >
                        <h3>Login</h3>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                className="form-control"
                                placeholder="Ex: cliente@email.com"
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input
                                className="form-control"
                                placeholder="Ex: onb23b423"
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                            />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button
                            className="btn btn-light btn-block"
                            type="submit"
                        >
                            Login
                        </button>
                        <p className="forgot-password text-right">
                            Forgot <a href="http://libgen.is/">password?</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;