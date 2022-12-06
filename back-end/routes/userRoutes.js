const express = require('express')
const { getAllUser, getOneUser, updateUser } = require('../controllers/userController')
const { authMiddleware ,isAdmin} = require('../middlewares/AuthMiddleware')
const errorHandller =require('../middlewares/errorHandller')
const tryCatch = require('../middlewares/tryCatch')

const router = express.Router()

router.get('/get-users',authMiddleware,isAdmin, tryCatch(getAllUser))
router.get('/get-user/:id',authMiddleware, tryCatch(getOneUser))
router.put('/update-user/:id',authMiddleware, tryCatch(updateUser))


router.use(errorHandller)


module.exports = router

