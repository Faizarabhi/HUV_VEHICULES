const mongoose = require('mongoose');
const Schema = mongoose.Schema

const carSchema = new Schema(
    {
        Name : { 
            type: String, 
            require: true
        },
        Type : {
            type : Schema.Types.ObjectId,
            ref: 'Type',
            require: true
        }
    }
)
module.exports = mongoose.model('Car',carSchema) 