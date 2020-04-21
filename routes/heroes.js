const express = require('express');
let router = express.Router();
let heroesController = require ('../controllers/heroesController.js');

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
router.get('/', heroesController.nombre);
// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
router.get('/detalle/:id' , heroesController.detalle);
// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
router.get('/:id/bio/:ok?', heroesController.bio);





module.exports= router;

