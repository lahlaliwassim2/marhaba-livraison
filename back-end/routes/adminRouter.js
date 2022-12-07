const express = require('express')
const { getAllUser, blockUser, unblockUser } = require('../controllers/adminController')
const { isAdmin, authMiddleware } = require('../middlewares/AuthMiddleware')
const errorHandller = require('../middlewares/errorHandller')
const tryCatch = require('../middlewares/tryCatch')
const router = express.Router()

router.get('/get-users',authMiddleware,isAdmin, tryCatch(getAllUser))
router.put('/block/:id',authMiddleware, tryCatch(blockUser))
router.put('/unblock/:id',authMiddleware, tryCatch(unblockUser))




router.use(errorHandller)
module.exports = router