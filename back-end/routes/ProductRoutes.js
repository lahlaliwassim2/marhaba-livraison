const route = require('express').Router()
const { AddNewProduct } = require('../controllers/ProductController')

route.post('/addproduct' , AddNewProduct)

module.exports = route