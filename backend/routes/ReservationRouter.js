const express = require('express')
const router = express.Router()


const {getReservation,AddReservation, DeleteReservation, SendConfirmation} = require('../controllers/ReservationController')

router.route('/').get(getReservation)
router.route('/').post(AddReservation)
router.route('/:id').delete(DeleteReservation)
router.route('/Confirmer/:Email').put(SendConfirmation)


module.exports = router
