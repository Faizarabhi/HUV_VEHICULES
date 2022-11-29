const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Reservation = new Schema(
    {
        UserName : { 
            type: String, 
            require: true
        },
        Adress : { 
            type: String, 
            require: true
        },
        City : { 
            type: String, 
            require: true
        },
        State : { 
            type: String, 
            require: true
        },
        Zip : { 
            type: String, 
            require: true
        },
        Country : { 
            type: String, 
            require: true
        },
        Type : { 
            type: String, 
            require: true
        },
        Date : { 
            type: Date, 
            require: true
        },
       
        status : {
            type: Boolean,
            require: true
        }
        
    }
)
module.exports = mongoose.model('Reservation',Reservation)