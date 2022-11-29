
const Detalles = require('../models/DetallesModel')



const getDetalles = async(req,res)=>{
    try{
        const Detalle = await Detalles.find();
        res.json(Detalle);
          }catch(err){
            res.json({message: err});
          }
}

const AddDetalles = async (req,res)=>{
    const Detals = await Detalles.find({Keys : req.body.Keys});
   
if(!Detals){

        const Detalle = await Detalles.create({
           
            Keys: req.body.Keys,
            Nom_Value: req.body.Nom_Value,
            Value: req.body.Value
        })
        res.status(200).json(Detalle)
  
       
    }else{
        console.log('deja Keys kayn')
    }

}

    const DeleteDetalles = async (req,res)=>{



        const Detalle = await Detalles.findById(req.params.id)
        if(!Detalle){
            res.status(400)
            throw new Error('Detalles Not found')
        }
        
     
    
        await Detalles.remove()
        res.status(200).json({id : req.params.id})
    
    }

    

    

 







module.exports = {AddDetalles, getDetalles, DeleteDetalles}
