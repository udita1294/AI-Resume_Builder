const express = require('express');

const authRouter = express.Router();


/*
@route POST /api/auth/register
@desc Register a new user   
*/
authRouter.post('/register', (req, res) => {
    res.send("Register route");
});

module.exports = authRouter;