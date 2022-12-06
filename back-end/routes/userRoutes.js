const express = require('express')
const { getAllUser, getOneUser } = require('../controllers/userController')
const { authMiddleware ,isAdmin} = require('../middlewares/AuthMiddleware')

const router = express.Router()

router.get('/get-users',authMiddleware,isAdmin, getAllUser)
router.get('/get-user/:id',getOneUser)

module.exports = router

