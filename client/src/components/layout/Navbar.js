import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Landing.css"

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to={"/"}><span className="text-primary-color">meu</span><span className="text-secondary-color">med</span> </Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/login"}>Login</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to={"/register"}>Cadastre-se</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar