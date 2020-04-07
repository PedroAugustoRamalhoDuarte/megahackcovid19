import React, {Component} from "react"
import PropTypes from "prop-types";
import {connect} from "react-redux";

class DoctorDashboard extends Component {
    render() {
        const { user } = this.props.auth;

        return (
            <div>
                <h1 className="text-center pt-5"> Dashboard de {user.name}</h1>
                <div className="row">
                    <div className="col statistic-box box shadow bg-white rounded h-100 m-5 p-3">
                        <h4>Número de consultas hoje</h4>
                        3
                    </div>
                    <div className="col statistic-box box shadow bg-white rounded h-100 m-5 p-3">
                        <h4>Número de consultas realizadas no mês</h4>
                        6
                    </div>
                    <div className="col statistic-box box shadow bg-white rounded h-100 m-5 p-3">
                        <h4>Número de pacientes </h4>
                        67
                    </div>
                </div>

                <h1 className="text-center pt-5"> Últimas Consultas </h1>

                <div className="row align-items-center justify-content-center my-3 w-100">
                    <section className="w-75">
                        <div className="table-responsive w-100">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th> Nome do paciente </th>
                                    <th> Dia </th>
                                    <th> Prescrição </th>
                                    <th> Exames </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td id="cells" className="align-middle">
                                        Seiki
                                    </td>

                                    <td id="cells" className="align-middle">
                                        2 de Fevereiro
                                    </td>

                                    <td id="cells" className="align-middle">
                                        <span className="btn btn-primary">Ver mais</span>
                                    </td>

                                    <td id="cells" className="align-middle">
                                        <span className="btn btn-info">Ver mais</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td id="cells" className="align-middle">
                                        Luiz
                                    </td>

                                    <td id="cells" className="align-middle">
                                        31 de Janeiro
                                    </td>

                                    <td id="cells" className="align-middle">
                                        <span className="btn btn-primary">Ver mais</span>
                                    </td>

                                    <td id="cells" className="align-middle">
                                        <span className="btn btn-info">Ver mais</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td id="cells" className="align-middle">
                                        João
                                    </td>

                                    <td id="cells" className="align-middle">
                                        2 de Janeiro
                                    </td>

                                    <td id="cells" className="align-middle">
                                        <span className="btn btn-primary">Ver mais</span>
                                    </td>

                                    <td id="cells" className="align-middle">
                                        <span className="btn btn-info">Ver mais</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

DoctorDashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(DoctorDashboard);