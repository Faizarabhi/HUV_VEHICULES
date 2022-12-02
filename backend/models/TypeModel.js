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
            type: Schema.Types.ObjectId,
            ref: 'Detalles',
            required: true
        }]
        

    }
)
module.exports = mongoose.model('Type',Type)