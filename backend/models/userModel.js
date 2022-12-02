const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fullname : {
        type : String,
        require : [true, "Please add a name"]
    },
    email : {
        type : String,
        require : [true, 'Please add an email'],
        unique : true
    },
    password : {
        type : String,
        require : [true, 'Please add password']
    },
    address : {
        type : String,
        require : [true, 'Please add adress']
    },
    city : {
        type : String,
        require : [true, 'Please add city']
    },
    state : {
        type : String,
        require : [true, 'Please add State']
    },
    zip : {
        type : Number,
        require : [true, 'Please add zip']
    },
    country : {
        type : String,
        require : [true, 'Please add country']
    },
    isActive :{
        type : Boolean,
        default: false
    },
    activationCode: {
        type : String
    }
},
{
    timestamps: true,
})
module.exports =  mongoose.model('User', userSchema)