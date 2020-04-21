const express = require('express');
let router = express.Router();
let mainController = require ('../controllers/mainController.js');

router.get('/', mainController.home);
// Ruta Créditos
router.get('/creditos', mainController.creditos);



module.exports = router;