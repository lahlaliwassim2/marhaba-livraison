const route = require('express').Router()
const { AddNewProduct , DeleteProduct , UpdateProduct, comentProduct, avisProduit,  } = require('../controllers/ProductController')
const upload = require('../utils/imageUploader')
const { authMiddleware } = require('../middlewares/AuthMiddleware')
const errorHandller = require('../middlewares/errorHandller')



route.post('/addproduct', upload.single('image'), AddNewProduct)
route.delete('/deleteproduct/:id' , DeleteProduct)
route.patch('/updateproduct/:id', UpdateProduct)
route.post('/comentproduct/:id',authMiddleware, comentProduct)
route.post('/AvisProduct/:id',authMiddleware, avisProduit)



route.use(errorHandller)
// route.get('/getproducts',findAllProduct)

module.exports = route