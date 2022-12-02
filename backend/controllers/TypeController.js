const Type = require('../models/TypeModel')
const Detalles = require('../models/DetallesModel')



const getType = async(req,res)=>{
    try{
        const Types = await Type.find().populate('Detalles')
        res.json(Types)
    }catch(err){
        res.json({message:err})
    }
       
}

const AddType = async (req,res)=>{

        const Types = await Type.create({
           Type_Name: req.body.Type_Name,
           Date_Creation: req.body.Date_Creation,
           Prix: req.body.Prix,
           Detalles: req.body.Detalles
        })
        res.status(200).json(Types)

    }


   
    
    
  
   








module.exports = {AddType , getType }
