const {Router} = require('express');

// Controllers
const UserController = require('./controllers/UserController');
const DrugController = require('./controllers/DrugController');
const AppointmentController = require('./controllers/AppointmentController');
const routes = Router();

// Usres Routes
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
// Recebe de paremetros o token no header x-access-token
// Retorna as informações do usuário
routes.get('/me', UserController.me);
// Faz o login do usuário passando de parametros JSON o email e a senha.
// Retorna um token de login, usado na função me
routes.post('/login', UserController.login);

// Drugs Routes
routes.post('/drug/createDrug', DrugController.drugCreate);
routes.get('/drug/:id', DrugController.drugDetails);
routes.put('/drug/:id/update', DrugController.drugUpdate);
routes.delete('/drug/:id/delete', DrugController.drugDelete);

// Appointment Rouutes
routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);
routes.get('/appointments/doctor/:id', AppointmentController.index_doctor);
routes.get('/appointments/patient/:id', AppointmentController.index_patient);
routes.get('/appointments/:id', AppointmentController.show);

module.exports = routes;