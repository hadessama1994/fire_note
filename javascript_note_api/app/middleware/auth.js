require('dotenv').config();
const secret = process.env.JWT_TOKEN;

const jwt = require('jsonwebtoken');
const User = require ('../models/user');


const WithAuth = (req, res, next)=>{
    const token = req.headers['access-token'];
    if (!token)
    res.status(401).json(({error: 'Nao autorizado'}))
    
    else {
        jwt.verify(token, secret, (err, decoded)=>{
            if(err)
            res.status(401).json({error: 'token invalido'}) 

        else {
            
            console.log(decoded);
            User.findOne({email: decoded.email}).then(user=>{
            req.user = user;
            next();})
        .catch(err=>{
            res.status(401).json({error: err});
        })
    }
})
    }
}

module.exports =  WithAuth;

