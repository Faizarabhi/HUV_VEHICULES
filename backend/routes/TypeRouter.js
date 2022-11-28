const express = require('express')
const router = express.Router()

const {AddType,getType,deleteType,UpdateType} = require('../controllers/carController')

router.route('/').get(getType).post(AddType)
router.route('/:id').put(UpdateType).delete(deleteType)


module.exports = router