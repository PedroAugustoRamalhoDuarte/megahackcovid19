
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

import "./Register.css"

class ScheduleAppointment extends Component {
    constructor() {
        super()
        this.state = {
            date: "",
            doctor: "",
            patient: "",
            errors: {}
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleOptionChange = changeEvent => {
        this.setState({
            role: changeEvent.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        const newAppointment = {
            date: this.state.name,
            doctor: this.state.cotor,
            patient: this.state.patient
        }

        this.props.registerUser(newAppointment, this.props.history);
    }

    render() {
        const { errors } = this.state
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form noValidate onSubmit={this.onSubmit}>
                        <h3>Nova consulta</h3>

                        <div className="form-group">
                            <label>Nome</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.date}
                                error={errors.date}
                                id="name"
                                type="datetime"
                                placeholder="João Lima"
                                className={classnames("form-control", {
                                    invalid: errors.date
                                })}
                            />
                            <span className="red-text">{errors.date}</span>
                        </div>

                        <div className="form-group">
                            <label>Pacient</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                                placeholder="Ex: cliente@email.com"
                                className={classnames("form-control", {
                                    invalid: errors.email
                                })}
                            />
                            <span className="red-text">{errors.email}</span>
                        </div>

                        <div className="form-group">
                            <label>Senha</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                                placeholder="Ex: onb23b423"
                                className={classnames("form-control", {
                                    invalid: errors.password
                                })}
                            />
                            <span className="red-text">{errors.password}</span>
                        </div>

                        <div className="form-group">
                            <label>Confirmar senha</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.password2}
                                error={errors.password2}
                                id="password2"
                                type="password"
                                placeholder="Ex: onb23b423"
                                className={classnames("form-control", {
                                    invalid: errors.password2
                                })}
                            />
                            <span className="red-text">{errors.password2} </span>
                        </div>


                        <div className="form-group">
                            <label>Tipo de usúario</label>
                            <br></br>
                            <div className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    name="inlineRadioOptions"
                                    value="paciente"
                                    checked={this.state.role === "paciente"}
                                    onChange={this.handleOptionChange}
                                    className="form-check-input"
                                />
                                <label className="form-check-label" htmlFor="pacienteRadio">Paciente</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-light btn-block">Me cadastrar!</button>
                        <p className="forgot-password text-right">
                            Already registered? <Link to={"/register"} >sign in</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));
