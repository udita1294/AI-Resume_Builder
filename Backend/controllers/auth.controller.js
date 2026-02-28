const userModel = require('../model/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



async function registerUserController(req, res) {
    try{
        const { username, email, password } = req.body;

        if(!username || !email || !password){
            return res.status(400).json({ message : "All fields are required" });
        }

        const isUserAlreadyExist = await userModel.findOne({
            $or : [{email},{username}]
        })
        if(isUserAlreadyExist){
            return res.status(400).json({ message : "User already exists with this email or username" });
        }

        const hash = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            username,
            email,
            password : hash,
        });
        const token = jwt.sign(
            {  id : user._id ,username : user.username,},
             process.env.JWT_SECRET, { expiresIn : '1d' });

        res.cookie('token', token) 
        
        res.status(201).json({ message : "User registered successfully", 
            user : {
                id : user._id,
                username : user.username,
                email : user.email,
            },token
         });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message : "Server Error" });
    }
}


module.exports = {
    registerUserController,
};