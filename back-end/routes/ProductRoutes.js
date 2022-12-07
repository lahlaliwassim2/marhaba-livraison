const route = require('express').Router()
const upload = require('../utils/imageUploader')

const { AddNewProduct , DeleteProduct , UpdateProduct, findAllProduct } = require('../controllers/ProductController')

route.post('/addproduct', upload.single('image'), AddNewProduct)

route.delete('/deleteproduct/:id' , DeleteProduct)
route.put('/updateproduct', UpdateProduct)
route.get('/getproducts',findAllProduct)

module.exports = route