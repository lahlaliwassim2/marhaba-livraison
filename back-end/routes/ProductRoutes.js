const route = require('express').Router()
const { AddNewProduct , DeleteProduct , UpdateProduct, comentProduct,  } = require('../controllers/ProductController')
const upload = require('../utils/imageUploader')
const { authMiddleware } = require('../middlewares/AuthMiddleware')



route.post('/addproduct', upload.single('image'), AddNewProduct)

route.delete('/deleteproduct/:id' , DeleteProduct)
route.patch('/updateproduct/:id', UpdateProduct)
route.post('/comentproduct/:id',authMiddleware, comentProduct)

// route.get('/getproducts',findAllProduct)

module.exports = route