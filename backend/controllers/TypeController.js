const Type = require('../models/TypeModel')
const Detalles = require('../models/DetallesModel')



const getType = async(req,res)=>{
    try{
        const Types = await Type.find();
        for(let j=0;j<Types.length;j++){
        console.log(Types[j].Type_Name)
        let Tayeps = Types[j].Detalles;
        for (let i=0; i<Tayeps.length; i++){
            let Det = await Detalles.find({_id:Types[0].Detalles[i]});
            console.log(Det[0].Nom_Value+' : '+ Det[0].Value);
        }
    }
      
        res.json(Types);
          }catch(err){
            res.json({message: err});
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
