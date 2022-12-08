const route = require('express').Router()
const { AddNewProduct , DeleteProduct , UpdateProduct, comentProduct, avisProduit,  } = require('../controllers/ProductController')
const upload = require('../utils/imageUploader')
const { authMiddleware, isAdmin } = require('../middlewares/AuthMiddleware')
const errorHandller = require('../middlewares/errorHandller')


///POUR L ADIM
route.post('/addproduct',authMiddleware, isAdmin,upload.single('image'), AddNewProduct)
route.delete('/deleteproduct/:id' ,authMiddleware,isAdmin, DeleteProduct)
route.put('/updateproduct', authMiddleware,isAdmin,UpdateProduct)


///POUR N IMPORTE QUEL USER
route.post('/comentproduct/:id',authMiddleware, comentProduct)
route.post('/AvisProduct/:id',authMiddleware, avisProduit)



route.use(errorHandller)

module.exports = route