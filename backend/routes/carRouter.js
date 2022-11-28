const express = require('express')
const router = express.Router()

const {getCars,AddCar,deleteCar,UpdateCars} = require('../controllers/carController')
const {protect} = require('../middlewar/authMiddlewar')

router.route('/').get(protect,getCars).post(AddCar)
router.route('/:id').put(UpdateCars).delete(deleteCar)


module.exports = router