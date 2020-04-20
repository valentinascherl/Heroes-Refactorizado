const express = require('express');

// Require de FS
const fs = require("fs");

// Ejecución de Express
const app = express();

// Leyendo y parseando (en array) el contenido de heroes.json



// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));


let rutaMain = require("./routes/main.js");
let rutaHeroes = require("./routes/heroes.js");


app.use('/', rutaMain);
app.use('/heroes', rutaHeroes);






// Ruta Créditos
app.get('/creditos', (req,res)=>{
    res.send('Credito de las y los developers.');
})

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});
