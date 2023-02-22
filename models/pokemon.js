const mongoose = require("mongoose")

var pokemonSchema = new mongoose.Schema({
    nombre: { type: String },
    numero: { type: Number },//DE AQUI PODEMOS SACAR URL PARA IMAGEN:https://assets.pokemon.com/assets/cms2/img/pokedex/full/726.png
    generacion: { type: Number },
    region: {
        type: String,
        enum: ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola", "Galar"]
    },
    tipo: {
        type: String,
        enum: ["Normal", "Agua", "Fuego", "Planta", "Electrico", "Hielo", "Lucha", "Veneno", "Tierra", "Volador", "Psiquico", "Bicho", "Roca", "Fantasma", "Dragon", "Siniestro", "Acero", "Hada"]
    },
    evolucion: { type: Number },
    legendario: { type: Boolean },
    cantidad: { type: Number },
    precio: { type: Number },


})

mongoose.model('pokemon', pokemonSchema);


//{
  //  "nombre":"juan",
   // "numero": 1,
    //"generacion":2,
    //"region":"Kanto",
    //"tipo":"Agua",
    //"evolucion":5,
    //"legendario":"true"
    //}