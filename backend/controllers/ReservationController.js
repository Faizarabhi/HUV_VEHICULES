const Reservation = require('../models/ReservationModel');
const nodemailer = require('nodemailer');


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


    const mailTransporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
        email: "saida.youcode123@outlook.com",
        pass  : "saidayoucodesafi123"
    }
    });
    const mailDetails = { 
        from: 'saida.youcode123@outlook.com',
        to  : 'moussahifsaida@outlooky.com',
        subject: 'Sending confirmation Email',
        text: 'Booking added successfuly !'
    }  
    mailTransporter.sendMail(details, (err) =>{
      if(err){
        console.log('it has an error', err);
      }else{
        console.log('Email sent successfully');
      }
    })







module.exports = {getCars, AddCar, UpdateCars,deleteCar }
