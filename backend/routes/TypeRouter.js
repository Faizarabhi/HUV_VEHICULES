const express = require('express')
const router = express.Router()

const {AddType,getType} = require('../controllers/TypeController')

router.route('/').get(getType).post(AddType)



module.exports = router