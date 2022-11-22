const { text } = require('express')


const getCars = async(req,res)=>{
    res.status(200).json("hello from controller")
    console.log("hello from controller")
}

module.exports = {getCars}