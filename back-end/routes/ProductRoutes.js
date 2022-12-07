const route = require('express').Router()
const upload = require('../utils/imageUploader')

const { AddNewProduct , DeleteProduct , UpdateProduct } = require('../controllers/ProductController')

route.post('/addproduct', upload.any('image'), AddNewProduct)
route.delete('/deleteproduct/:id' , DeleteProduct)
route.patch('/updateproduct', UpdateProduct)

module.exports = route