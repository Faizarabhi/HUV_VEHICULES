const express = require('express')
const router = express.Router()


const {getReservation,AddReservation, DeleteReservation, SendConfirmation} = require('../controllers/ReservationController')

router.route('/').get(getReservation).post(AddReservation)
router.route('/:id').delete(DeleteReservation)
router.route('/Confirmer/:Email').post(SendConfirmation)


module.exports = router