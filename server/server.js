const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const corsMiddleware = require('./middleware/cors.middleware');
const http = require('http');
const app = express();
const server = http.createServer(app);
const users = require('./routes/users');
const games = require('./routes/games');


const PORT = process.env.PORT || config.get('serverPort');


app.use(corsMiddleware);
app.use(express.json());
app.use('/users', users);
app.use('/games', games);

const start = async () => {
    try {
        await mongoose.connect(config.get('dbUrl'));
        console.log('connected database')
        server.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        });
    } catch (error) {
        console.log(error)
    }
}

start();