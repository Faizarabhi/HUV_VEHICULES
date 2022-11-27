const Reservation = require('../models/ReservationModel')



const getReservation = async(req,res)=>{
    try{
        const care = await Reservation.find();
        res.json(care);
          }catch(err){
            res.json({message: err});
          }
}

const AddReservation = async (req,res)=>{
       
        const Cars = await Reservation.create({
        Name: req.body.Name,
        Type: req.body.Type
        })
        res.status(200).json(Cars)
    }
    
    const UpdateCars = async (req,res)=>{
        const Reserve = await Reservation.findById(req.params.id)
        !Cars? res.status(400) &&  Error('Car Not found'): null;
        const Reserver = await Reservation.findByIdAndUpdate(req.params.id,req.body,{ new : true})
        res.status(200).json(Reserver)
    
    }

    // confirme booking by mail
    // const confirmeBooking = async (req,res)=>{

      
    //     }


   








module.exports = {getCars, AddCar, UpdateCars,deleteCar }
