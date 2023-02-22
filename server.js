
const mongoose = require("mongoose")
mongoose.set("strictQuery", true)
mongoose.connect("mongodb://localhost/pokemon", function (err, res) {
    if (err) {
        console.log("Error conectando a la BD" + err)
    }
    console.log(`connected to database`);
})
const express = require('express')
const app = express()
var models = require('./models/pokemon');
var pokemonroute = require('./controllers/routes');



const PORT = 3000;

//const pokemon = require("./models/pokemon")

//app.use(express.json())

const router = express.Router()
//var methodOverride  = require("method-override")
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
});

router.get("/", function (req, res) {
    res.send("Holi")
})

app.use(router)

//API routes

var pokemon = express.Router();

pokemon.route('/pokemon')
    .get(pokemonroute.findAllpokemon)
    .post(pokemonroute.addpokemon);

pokemon.route('/pokemon/:id')
    .get(pokemonroute.findById)
    .post(pokemonroute.updatepokemon)
    .delete(pokemonroute.deletePokemon);


app.use('/api', pokemon);

//starting the server
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

