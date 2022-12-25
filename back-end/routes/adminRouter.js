const express = require('express')
const { getAllUser, blockUser, unblockUser, getClients } = require('../controllers/adminController')
const { addVille } = require('../controllers/villeControllers')
const { isAdmin, authMiddleware } = require('../middlewares/AuthMiddleware')
const errorHandller = require('../middlewares/errorHandller')
const tryCatch = require('../middlewares/tryCatch')
const router = express.Router()
1
router.get('/get-users',authMiddleware,isAdmin, tryCatch(getAllUser))
router.put('/block/:id',authMiddleware, tryCatch(blockUser))
router.put('/unblock/:id',authMiddleware, tryCatch(unblockUser))
router.post('/addVille',authMiddleware,isAdmin, tryCatch(addVille))
router.get('/all-clients', getClients )




router.use(errorHandller)
module.exports = router