const Router = require("express");
const Game = require("../models/game");
const router = new Router();

router.post('/', async (req, res) => {
    try {
        const {gameName, description, img} = req.body;
        const game = new Game({gameName, description, img});
        game.save();
        return res.json(game)
    } catch (e) {
        console.log(e);
        res.send({message: 'Server error'});
    }
})

router.get('/', async (req, res) => {
    try {
        const games = await Game.find();
        return res.status(200).json(games);
    } catch (e) {
        console.log(e);
        res.send({message: 'Server error'});
    }
})

module.exports = router