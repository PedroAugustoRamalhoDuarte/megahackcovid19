const {Router} = require('express');

// Controllers
const UserController = require('./controllers/UserController');
const routes = Router();
var DrugController = require('./controllers/DrugController');

// Devs Routes
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
router.post('/createDrug', DrugController.drugCreate);
router.post('/readDrug', DrugController.drugDetails);

// Recebe de paremetros o token no header x-access-token
// Retorna as informações do usuário
routes.get('/me', UserController.me);

// Faz o login do usuário passando de parametros JSON o email e a senha.
// Retorna um token de login, usado na função me
routes.post('/login', UserController.login);



module.exports = routes;