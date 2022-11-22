const mongoose = require('mongoose');
const Schema = mongoose.Schema

const carSchema = new Schema(
    {
        name : { type: String, require: true}
    }
)
module.exports = mongoose.model('Car',carSchema)