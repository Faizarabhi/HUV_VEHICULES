
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
    const Detals = await Detalles.find();
    var J = 0;
    Detals.forEach(element => {
        if(element.Keys == req.body.Keys ){
            console.log("Keys deja par list")
            J=J+1;
        }
    });

    if(J==0){
        const Detalle = await Detalles.create({
           
            Keys: req.body.Keys,
            Nom_Value: req.body.Nom_Value,
            Value: req.body.Value
        })
        res.status(200).json(Detalle)
    }
  
       
    }

    

 







module.exports = {AddDetalles, getDetalles}
