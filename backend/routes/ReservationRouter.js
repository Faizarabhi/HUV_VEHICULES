const express = require('express')
const router = express.Router()

const {getReservation,AddReservation, DeleteReservation} = require('../controllers/ReservationController')

router.route('/').get(getReservation).post(AddReservation)
router.route('/:id').delete(DeleteReservation)


module.exports = router