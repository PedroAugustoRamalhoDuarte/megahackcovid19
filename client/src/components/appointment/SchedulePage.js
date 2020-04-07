import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import "../auth/Register.css"
import axios from "axios";
import {GET_ERRORS} from "../../actions/types";

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
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push("/");
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

        axios.post("http://localhost:5000/appointments", newAppointment)
            .then(res => console.log("Comsulta Criada com sucesso"))
            .catch(err => console.log("Não foi possível criar a consulta"));
        // this.props.registerUser(newAppointment, this.props.history);
    }

    render() {
        const { errors } = this.state
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form noValidate onSubmit={this.onSubmit}>
                        <h3>Nova consulta</h3>

                        <div className="form-group">
                            <label>Data e hora da consulta</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.date}
                                error={errors.date}
                                id="date"
                                type="datetime-local"
                                className={classnames("form-control", {
                                    invalid: errors.date
                                })}
                            />
                            <span className="red-text">{errors.date}</span>
                        </div>

                        <div className="form-group">
                            <label> Nome do paciente </label>
                            <input
                                onChange={this.onChange}
                                value={this.state.patient}
                                error={errors.patient}
                                id="patient"
                                type="patient"
                                placeholder="ID do paciente"
                                className={classnames("form-control", {
                                    invalid: errors.patient
                                })}
                            />
                            <span className="red-text">{errors.patient}</span>
                        </div>

                        <button type="submit" className="btn btn-light btn-block">Marcar Consulta</button>
                    </form>
                </div>
            </div>
        );
    }
}

ScheduleAppointment.propTypes = {
    //registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps)(withRouter(ScheduleAppointment));
