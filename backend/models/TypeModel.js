const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Type = new Schema(
    {
        
        Type_Name : { 
            type: String, 
            require: true
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
            type: Array,
            required: true
        }]
        
    }
)
module.exports = mongoose.model('Type',Type)