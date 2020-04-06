import React, {Component} from "react"

// Import Style
import "./Teste.css"
import "./Landing.css"

// Import Images
import VideoCallImage from "./images/video-call.png"
import PrescriptionImage from "./images/prescription.jpg"
import CoinsImage from "./images/coins.png"
import NotificationImage from "./images/notification.png"
import DeliveryImage from "./images/delivery.jpg"
import CloudImage from "./images/cloud.png"


class Landing extends Component {
    render() {
        return (
            <div>
                <header className="masthead text-center text-white">
                    <div className="masthead-content">
                        <div className="container">
                            <h1 className="masthead-heading mb-0"><span className="">DOC</span><span
                                className="">BEE</span></h1>
                            <h2 className="masthead-subheading mb-0">Venha fazer parte dessa transformação!</h2><a
                            className="btn btn-primary btn-xl rounded-pill mt-5" role="button" href="#">Conheça Mais</a>
                        </div>
                    </div>
                    <div className="bg-circle-1 bg-circle"/>
                    <div className="bg-circle-2 bg-circle"/>
                    <div className="bg-circle-3 bg-circle"/>
                    <div className="bg-circle-4 bg-circle"/>
                </header>
                <h1 className="text-success pt-5" > Soluções</h1>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5"><img className="rounded-circle img-fluid" src={VideoCallImage} alt="Imagem de video chaamada"/>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4">Consultas em Vídeo</h2>
                                    <p>Para conectar médicos e pacientes à distância,
                                        serão realizadas consultas em vídeo com alta
                                        resolução</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5"><img className="rounded-circle img-fluid" src={PrescriptionImage} alt="Prescrição de medicamentos"/>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5">
                                    <h2 className="display-4">Prescrição de
                                        Medicamentos e Pedidos
                                        de Exames Remotos</h2>
                                    <p>Para prescrever medicamentos controlados e
                                        solicitar pedidos de exames remotamente, serão
                                        utilizados Certificados Digitais</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5"><img className="rounded-circle img-fluid" src={CoinsImage} alt="Imagem representando ofertas"/>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4">Melhores Ofertas de
                                        Medicamentos</h2>
                                    <p>O paciente poderá consultar o valor de seus
                                        medicamentos nas farmácias mais próximas e
                                        encontrar as melhores ofertas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5"><img className="rounded-circle img-fluid" src={DeliveryImage} alt="Imagem de um caminhão representando entregas"/>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5">
                                    <h2 className="display-4">Entrega de Medicamentos</h2>
                                    <p>Para evitar deslocamentos, os medicamentos
                                        poderão ser entregues em domicílio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5"><img className="rounded-circle img-fluid" src={NotificationImage} alt="Imagem de um sno com notificação"/>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4">Lembretes Automáticos</h2>
                                    <p>Para facilitar a adesão do paciente ao tratamento,
                                        poderão ser criados lembretes automáticos em
                                        seu celular para o uso dos medicamentos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5"><img className="rounded-circle img-fluid" src={CloudImage} alt="Imagem representando armazenamento na nuvem"/>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5">
                                    <h2 className="display-4">Armazenamento em Nuvem</h2>
                                    <p>As prescrições de medicamentos poderão ser
                                        armazenadas na nuvem, evitando a necessidade
                                        de seu armazenamento físico por anos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <h1 className="text-secondary-color" > TUDO ISSO, E MUITO MAIS, EM
                    APENAS UMA PLATAFORMA </h1>
            </div>
        )
    }
}

export default Landing