const Router = require("express");
const User = require("../models/user");
const router = new Router();

router.post('/login', async (req, res) => {
    try {
        const {name} = req.body;
        const user = new User({name});
        user.save();
        return res.json(user)
    } catch (e) {
        console.log(e);
        res.send({message: 'Server error'});
    }
})


module.exports = router