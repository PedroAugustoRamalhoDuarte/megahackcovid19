const {Router} = require('express')

// Controllers
const AppointmentController = require('../controllers/AppointmentController');
const routes = Router();

// Appointment Rouutes
routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);
routes.get('/appointments/doctor/:id', AppointmentController.index_doctor);
routes.get('/appointments/patient/:id', AppointmentController.index_patient);
routes.get('/appointments/:id', AppointmentController.show);

module.exports = routes;