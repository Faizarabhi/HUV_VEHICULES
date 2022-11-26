const Reservation = require('../models/ReservationModel')



const getReservation = async(req,res)=>{
    try{
        const reserve = await Reservation.find();
        res.json(reserve);
          }catch(err){
            res.json({message: err});
          }
}

const AddReservation = async (req,res)=>{
       
        const Reserve = await Reservation.create({
            UserName: req.body.UserName,
            Adress: req.body.Adress,
            City: req.body.City,
            state: req.body.State,
            Zip: req.body.Zip,
            Country: req.body.Country,
            Type: req.body.Type,
            DateDebut: req.body.DateDebut,
            DateFin: req.body.DateFin

        })
        res.status(200).json(Reserve)
    }

    const DeleteReservation = async (req,res)=>{



        const Reserve = await Reservation.findById(req.params.id)
        if(!Reserve){
            res.status(400)
            throw new Error('Reservation Not found')
        }
        
     
    
        await Reservation.remove()
        res.status(200).json({id : req.params.id})
    
    }
    
  
   








module.exports = {AddReservation , getReservation , DeleteReservation }
