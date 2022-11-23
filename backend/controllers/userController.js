const { text } = require('express')


const loginUser = async(req,res)=>{


    res.status(200).json("hello Ulkdkldrom controller")
}

const registerUser = async(req, res)=>{
    res.status(200).json("hello from register")
}

module.exports = {loginUser, registerUser}