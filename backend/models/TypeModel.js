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
        Detalles: {
            type: Object,
            required: true
        }
        
    }
)
module.exports = mongoose.model('Type',Type)