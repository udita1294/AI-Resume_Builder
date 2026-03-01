const express = require('express');
const authController = require('../controllers/auth.controller');

const authRouter = express.Router();


/*
@route POST /api/auth/register
@desc Register a new user   
*/
authRouter.post('/register', authController.registerUserController);

/*
@route POST /api/auth/login
@desc Login a user   
*/
authRouter.post('/login', authController.loginUserController);

/*
@route GET /api/auth/logout
@desc clear cookie and blacklist token 
*/

authRouter.get('/logout',)
module.exports = authRouter;