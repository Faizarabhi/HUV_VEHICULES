const { text } = require('express')
const Car = require('../models/carModel')



const getCars = async(req,res)=>{
    try{
        const care = await Car.find();
        res.json(care);
          }catch(err){
            res.json({message: err});
          }
}

const AddCar = async (req,res)=>{
       
        const Cars = await Car.create({
        Name: req.body.Name,
        Type: req.body.Type
        })
        res.status(200).json(Cars)
    }

    const UpdateCars = async (req,res)=>{
        const Cars = await Car.findById(req.params.id)
        !Cars? res.status(400) &&  Error('Car Not found'): null;
        const UpdateCrs = await Car.findByIdAndUpdate(req.params.id,req.body,{ new : true})
        res.status(200).json(UpdateCrs)
    
    }

    const deleteCar = async (req,res)=>{
        const Cars = await Car.findById(req.params.id)
        if(!Cars){
            res.status(400)
            throw new Error('grandbus Not found')
        }
        
     
    
        await Cars.remove()
        res.status(200).json({id : req.params.id})
    }








module.exports = {getCars, AddCar, UpdateCars,deleteCar }
