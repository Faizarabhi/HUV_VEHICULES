const express = require('express')
const router = express.Router()

const {getDetalles,AddDetalles} = require('../controllers/DetaillesController')

router.route('/').get(getDetalles).post(AddDetalles)



module.exports = router