const express = require('express')
const router = express.Router()

const {loginUser, registerUser, verifyUser} = require('../controllers/userController')

router.post('/login',loginUser)
router.post('/register',registerUser)
router.post('/verifyUser/:activationCode',verifyUser)
module.exports = router
