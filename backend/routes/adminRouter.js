const express = require('express');
const router = express.Router();

const {
    registerAdmin, 
    loginAdmin,
    getDataAdmin,
} = require('../controllers/adminController')



const {protect,} =  require('../middlewar/authMiddlewar')

router.post('/register',registerAdmin);
router.post('/login',loginAdmin);
router.get('/displayMe', protect, getDataAdmin);



module.exports = router;




