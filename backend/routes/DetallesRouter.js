const express = require('express')
const router = express.Router()

const {getDetalles,AddDetalles, DeleteDetalles} = require('../controllers/DetaillesController')

router.route('/').get(getDetalles).post(AddDetalles)
router.route('/:id').delete(DeleteDetalles)

module.exports = router
