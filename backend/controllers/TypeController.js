const Type = require('../models/TypeModel')



const getType = async(req,res)=>{
    try{
        const Types = await Type.find();
        res.json(Types);
          }catch(err){
            res.json({message: err});
          }
}

const AddType = async (req,res)=>{
       
        const Types = await Type.create({
           Type_Name: req.body.UserName,
           Date_Creation: req.body.Date_Creation,
           Detalles: req.body.Detalles


        })
        res.status(200).json(Types)
    }

    const DeleteTypes = async (req,res)=>{



        const Types = await Type.findById(req.params.id)
        if(!Types){
            res.status(400)
            throw new Error('Reservation Not found')
        }
        
     
    
        await Type.remove()
        res.status(200).json({id : req.params.id})
    
    }
    
  
   








module.exports = {AddType , getType , DeleteTypes }
