const route = require('express').Router()
const { AddNewCategorie, DeleteCategorie,GetAllCategories } = require('../controllers/CategorieControlller')

route.post('/addcategorie' , AddNewCategorie)
route.delete('/deletecategorie',DeleteCategorie)
route.get('/all', GetAllCategories)

module.exports = route