var express = require('express');
var router = express.Router();
const User = require('../models/user.js');
const jwt = require ('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_TOKEN; //.env é para nao subir a key no github


//listando

router.get('/userList', async(req, res) => { 
let user = await User.find({})
res.json({user})
})
 

//registrando



router.post('/register', async(req,res)=>{
  const {name, email, password} = req.body;
  const user = new User({name, email, password});

  try {
    await user.save();
  res.status(200).json(user);
    
  } catch (error) {
    res.status(500).json({error: 'Error to register user'});
    
  }
})

//logando

router.post('/login', async(req, res) => {
const {email,password} = req.body;

try {
  let user = await User.findOne({email});
  if (!user) 
  res.status(401).json({error: 'Email inválido'})    
  else {
     user.isCorrectPassword(password, (err, same)=>{
       if(!same){
        res.status(401).json({error: 'senha inválida'})
       }
       else{
         const token = jwt.sign({email}, secret, {expiresIn:'10d'}); //gerando token de autenticação
         res.json({user: user, token:token})
        

       }
     })   
  }
  
} catch (error) {
  res.status(500).json({message: 'erro interno'})
}
})





module.exports = router;
