let mainController = {
    home: function(req,res){
    res.send("Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como    ti!");
}, 
   creditos: function(req,res){
    res.send("Credito de las y los developers.");
}
}
module.exports = mainController;