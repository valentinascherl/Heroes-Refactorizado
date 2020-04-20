let express = require('express');
let router = express.Router();
let heroesController = require ('../controllers/heroesController.js');

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
router.get('/', heroesController.nombre);
// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
router.get('/detalle/:id' , heroesController.detalle);
// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
router.get('/:id/bio/:ok?', (req, res) => {
    // Acá lo primero será encontrar al héroe que corresponda
    let heroe = heroes.find(h => h.id == req.params.id);
    if(!heroe) {// Si NO se encuentra al héroe se envía un mensaje
        res.send("No encontramos un héroe para mostrarte su biografía");
    }else {     // Si se encuentra al héroe:
        if (req.params.ok!= undefined
             && req.params.ok == 'ok'   ){
                res.send(`${heroe.nombre}: ${heroe.resenia}`);
             }else {res.send(`${heroe.nombre}: "Lamento que no desees saber más de mi :("`);
            }
        }
});




module.exports= router;

