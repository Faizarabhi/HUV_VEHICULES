const { text } = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const { count } = require('../models/userModel')
const { sendConfirmationEmail } = require('../helpers/nodemailer')



const verifyUser =  asyncHandler(async(req,res)=>{
  const user = await User.findOne({activationCode : req.params.activationCode})
  await User.findByIdAndUpdate(user._id, {isActive : true})
  res.send(user)
  
});
const registerUser = asyncHandler(async(req,res)=>{

  // methode pour creer une chaine e characteres aleatoire!
  const characteres = "0123456789abcdefjhigklmnopqrstuvwxyzABCDEFJHIGKLMNOPQRSTUVWYZ";
  let activationCode = "";
  for(let i = 0; i < 25; i++){
    activationCode  += characteres[Math.floor(Math.random() * characteres.length)]
  }
    const {fullname, email, password, address, city, state, zip, country} = req.body
    if(!fullname || !email || !password || !address || !address || !city || !state || !zip || !country){
    res.status(400) 
    throw new Error('Please add all fields')
    }
    
    const userExists = await User.findOne({email});
    if(userExists){
        throw new Error('User already exists')
    } 
    //  salt is a random string that makes the hash unpredictable
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash( password, salt);
    const user = await User.create({
        fullname,
        email,
        password: hashedPassword, 
        address, 
        city, 
        state, 
        zip, 
        country,
        activationCode: activationCode
    })
    if(user){
        res.status(201).json({
        _id : user.id,
        fullname : fullname,
        email : email})
       } else{
    res.status(400) 
    throw new Error('Invalid user data');
    }
    sendConfirmationEmail(user.email, user.activationCode)
    
})

const loginUser = asyncHandler(async (req, res) => {
    const  email= req.body.email
    const password = req.body.password
  
    // Check for user email
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password)) && user.isActive) {
      res.json({
        user:user.role,
        user: user.fullname,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      console.log('Veuiller verifier votre boite email')
      // throw new Error('Invalid credentials')
    }
  })


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, "abc123", {
      expiresIn: '30d',
    })
  }

module.exports = {loginUser, registerUser, verifyUser}