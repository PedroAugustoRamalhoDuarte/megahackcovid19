const AppointmentController = require('../models/Appointment');

module.exports = {
    async index(request, response) {
        const appointments = await AppointmentController.find();
        return response.json(appointments);
    },

    async index_doctor(request, response) {
        const appointments = await AppointmentController.find({doctor: request.params.id});
        return response.json(appointments);
    },

    async index_patient(request, response) {
        const appointments = await AppointmentController.find({patient: request.params.id});
        return response.json(appointments);
    },

    async show(request, response) {
        const appointment = await AppointmentController.findById(request.params.id);
        return response.json(appointment);
    },

    async store(request, response) {
        const {date, doctor, patient, drugs} = request.body;
        let appointment;
        try{
        appointment = await AppointmentController.create({
                date,
                doctor,
                patient,
                drugs,
            });
            return response.json(appointment);
        } catch (e) {
           return response.json({error: e});
        }

    },
};