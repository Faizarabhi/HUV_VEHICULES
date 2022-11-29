const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Type = new Schema(
    {
        
        Type_Name : { 
            type: String, 
            require: true,
            unique: true
        },
        Date_Creation : {
            type : Date,
            require: true
        },
        Prix : {
            type : Number,
            require: true
        },
        Detalles: [{
            type: String,
            required: true
        }]
        
    }
)
module.exports = mongoose.model('Type',Type)