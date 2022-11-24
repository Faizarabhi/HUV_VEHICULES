const express = require('express')
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const db = require('./db')
const cors = require('cors')
const port = process.env.PORT || 5000
const {errorHandler} = require('./middlewar/errorMiddlewar')
const carRouter= require('./routes/carRouter');

db();
const app = express()
// var corsOptions = {
//     origin: "http://localhost:3000"
// }
// app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(errorHandler)
app.use('/api/cars',require('./routes/carRouter'))
app.use('/api/users',require('./routes/userRouter'))


app.listen(port, ()=>{ 
    console.log(`hello from ${port}`)
})

n