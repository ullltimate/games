const {Schema, model} = require("mongoose");

const Game = new Schema({
    gameName: {type: String, required: true},
    description: {type: String},
    img: {type: String},
})

module.exports = model('Game', Game);