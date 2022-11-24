const mongoose = require('mongoose');
const Schema = mongoose.Schema

const carSchema = new Schema(
    {
        Name : { 
            type: String, 
            require: true
        },
        MaxSped : {
            type: Number,
            require: true
        },
        KmRange : {
            type: Number,
            require : true
        },
        HorsPower : {
            type: Number,
            require : true
        },
        Prix : {
            type: Number,
            require : true
        },
        Type : {
            type: String,
            require: true
        }
    }
)
module.exports = mongoose.model('Car',carSchema)