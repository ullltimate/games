const Router = require("express");
const Room = require("../models/room");
const router = new Router();

router.post('/', async (req, res) => {
    try {
        const {gameName, user1} = req.body;
        const room = new Room({gameName, user1});
        room.save();
        return res.json(room)
    } catch (e) {
        console.log(e);
        res.send({message: 'Server error'});
    }
})

router.post('/game', async (req, res) => {
    try {
        const {gameName} = req.body;
        const rooms = await Room.find({gameName: gameName});
        return res.json(rooms)
    } catch (e) {
        console.log(e);
        res.send({message: 'Server error'});
    }
})

router.put('/status/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const {status} = req.body;
        const room = await Room.findOne({_id});
        await Room.updateOne({_id}, {$set: {status: status}});
        return res.status(200).json({message: `Room ${_id} ${status}`});
    } catch (e) {
        console.log(e);
        res.send({message: 'Server error'});
    }
})

router.put('/user/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const {user2} = req.body;
        const room = await Room.findOne({_id});
        await Room.updateOne({_id}, {$set: {user2: user2}});
        return res.status(200).json({message: `Joined ${_id} room user2:${user2}`});
    } catch (e) {
        console.log(e);
        res.send({message: 'Server error'});
    }
})

module.exports = router