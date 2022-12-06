const express = require('express')
const { getAllUser, binUser } = require('../controllers/adminController')
const { isAdmin, authMiddleware } = require('../middlewares/AuthMiddleware')
const errorHandller = require('../middlewares/errorHandller')
const tryCatch = require('../middlewares/tryCatch')
const router = express.Router()

router.get('/get-users',authMiddleware,isAdmin, tryCatch(getAllUser))
router.put('/block/:id',authMiddleware, tryCatch(binUser))



router.use(errorHandller)
module.exports = router