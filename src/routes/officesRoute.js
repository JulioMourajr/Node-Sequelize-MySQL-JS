const express = require('express'); // gerenciar o roteamento da aplicação
const router = express.Router();// gerenciamento e roteamento de rotas.

const officesController = require('../controllers/officesController'); // add para cada rota especifica.

router.get('/', officesController.getAllOffices);

router.get('/:officeCode', officesController.getOfficeByOfficeCode);

router.post('/', officesController.createOffice);

router.put('/:officeCode', officesController.updateOffice);

router.delete('/:officeCode', officesController.deleteOffice);

module.exports = router;