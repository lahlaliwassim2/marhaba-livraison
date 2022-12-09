const route = require('express').Router()
const  livreur  = require('../controllers/livreurController')
const tryCatch =require('../middlewares/tryCatch')

route.post('/livreur' , tryCatch(livreur))

module.exports = route