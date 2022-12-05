const route = require('express').Router()
const { AddNewProduct , DeleteProduct , UpdateProduct } = require('../controllers/ProductController')

route.post('/addproduct' , AddNewProduct)
route.delete('/deleteproduct/:id' , DeleteProduct)
route.patch('/updateproduct', UpdateProduct)

module.exports = route