
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));


let heroesController = {
    nombre: function(req, res){
        res.send(heroes);},
    detalle:function(req, res){
        // Acá lo primero será encontrar al héroe que corresponda
        let heroe = heroes.find(x => x.id == req.params.id);
        //console.log(heroe)
        if (heroe){ // Si se encuentra al héroe se envía el nombre y su profesión
            res.send(`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`);
        } else {//SiNO se encuentra se envía el mensaje de no encontrado
            res.send("No se encontro a ese heroe")};}
}
module.exports = heroesController;