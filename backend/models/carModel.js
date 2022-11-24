const mongoose = require('mongoose');
const Schema = mongoose.Schema

const carSchema = new Schema(
    {
        Name : { 
            type: String, 
            require: true
        },
        Type : {
            type: String,
            require: true
        }
    }
)
module.exports = mongoose.model('Car',carSchema)