import React, { Component } from "react";

import PropTypes from "prop-types"
import { connect } from "react-redux"
import { loginUser } from "../../actions/authActions"
import classnames from "classnames"

import "./Login.css"

class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/clientLandPage");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/clientLandPage"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
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

        this.props.loginUser(userData) // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
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
                                placeholder="Ex: cliente@email.com"
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                                className={classnames("form-control", {
                                    invalid: errors.email || errors.emailnotfound
                                })}
                            />
                            <span className="red-text">
                                {errors.email}
                                {errors.emailnotfound}
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input
                                placeholder="Ex: onb23b423"
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                                className={classnames("form-control", {
                                    invalid: errors.password || errors.passwordincorrect
                                })}
                            />
                            <span className="red-text">
                                {errors.password}
                                {errors.passwordincorrect}
                            </span>
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);














