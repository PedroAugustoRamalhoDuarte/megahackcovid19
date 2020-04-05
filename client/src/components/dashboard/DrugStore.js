import React, {Component} from "react"

class DrugStore extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center pt-5"> Fármacia DocBee</h1>
                <div className="row">
                    <div className="col statistic-box box shadow bg-white rounded h-100 m-5 p-3">
                        <h4>Número de medicamentos vendidos</h4>
                        10
                    </div>
                    <div className="col statistic-box box shadow bg-white rounded h-100 m-5 p-3">
                        <h4>Número de entregas</h4>
                        6
                    </div>
                    <div className="col statistic-box box shadow bg-white rounded h-100 m-5 p-3">
                        <h4>Número de clientes </h4>
                        9
                    </div>
                </div>

                <h1 className="text-center pt-5"> Gestão de Estoque </h1>

                <div className="row align-items-center justify-content-center my-3 w-100">
                    <section className="w-75">
                        <div className="table-responsive w-100">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Estoque</th>
                                    <th>Comprados Hoje</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td id="cells" className="align-middle">
                                        Parecetamol
                                    </td>

                                    <td id="cells" className="align-middle">
                                        2
                                    </td>

                                    <td id="cells" className="align-middle">
                                        3
                                    </td>
                                </tr>
                                <tr>
                                    <td id="cells" className="align-middle">
                                        Rémedio para dor
                                    </td>

                                    <td id="cells" className="align-middle">
                                        10
                                    </td>

                                    <td id="cells" className="align-middle">
                                        9
                                    </td>
                                </tr>
                                <tr>
                                    <td id="cells" className="align-middle">
                                        Rémedio para perna
                                    </td>

                                    <td id="cells" className="align-middle">
                                        2
                                    </td>

                                    <td id="cells" className="align-middle">
                                        9
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

export default DrugStore