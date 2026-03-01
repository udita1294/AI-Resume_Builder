const express = require('express');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

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

authRouter.get("/logout", authController.logoutUserController);

/*
@route GET /api/auth/get-me
@desc get the current user logged in details
*/
authRouter.get("/get-me", authMiddleware.authUser, authController.getMeController);

module.exports = authRouter;
