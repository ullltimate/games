const {Schema, model} = require("mongoose");

const Room = new Schema({
    gameName: {type: String, required: true},
    user1: {type: String, required: true},
    user2: {type: String, default: ''},
    status: {type: String, default: 'active'},
})

module.exports = model('Room', Room);