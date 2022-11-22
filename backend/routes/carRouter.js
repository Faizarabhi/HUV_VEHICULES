const express = require('express')
const router = express.Router()

const {getCars} = require('../controllers/carController')

router.route('/').get(getCars)

module.exports = router