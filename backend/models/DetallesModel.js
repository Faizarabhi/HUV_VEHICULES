const mongoose = require('mongoose');
const Schema = mongoose.Schema

const DetallesSchema = new Schema(
    {
        Keys : { 
            type: Number, 
            require: true
        },
        Nom_Value : {
            type: String,
            require: true
        }, 
        Value : {
            type: String,
            require: true
        }
    }
)
module.exports = mongoose.model('Detalles',DetallesSchema)