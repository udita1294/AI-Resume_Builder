const jwt = require('jsonwebtoken');
const TokenBlacklistModel = require('../model/blacklist.model');

function authUser(req, res, next) {
    const token = req.cookies.token;
    
    if(!token){
        return res.status(401).json({ message : "Token not found" });
    }
    const isBlacklisted = TokenBlacklistModel.findOne({ token });
    if(isBlacklisted){
        return res.status(401).json({ message : "Token is invalid" });
    }

    
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    }catch(err){
        console.error(err);
        return res.status(401).json({ message : "Invalid token" });
    }
}

module.exports = {authUser};
