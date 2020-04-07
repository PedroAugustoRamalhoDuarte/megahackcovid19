import axios from "axios";

import { GET_ERRORS } from "./types";

// Store Appointment
export const storeAppointment = (appointmentData, history) => dispatch => {
    axios
        .post("http://localhost:5000/appointment", appointmentData)
        .then(res => history.push("/login"))
        .catch(err => console.log("Erro"));
};