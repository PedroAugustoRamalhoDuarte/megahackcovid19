const {Router} = require('express');

// Controllers
const drugRoutes = Router();
var DrugController = require('../controllers/DrugController');

drugRoutes.post('/createDrug', DrugController.drugCreate);
drugRoutes.get('/:id', DrugController.drugDetails);
drugRoutes.put('/:id/update', DrugController.drugUpdate);
drugRoutes.delete('/:id/delete', DrugController.drugDelete);


module.exports = drugRoutes;