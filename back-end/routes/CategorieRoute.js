const route = require('express').Router()
const { AddNewCategorie } = require('../controllers/CategorieControlller')

route.post('/addcategorie' , AddNewCategorie)

module.exports = route