const route = require('express').Router()
const { AddNewCategorie, DeleteCategorie } = require('../controllers/CategorieControlller')

route.post('/addcategorie' , AddNewCategorie)
route.delete('/deletecategorie',DeleteCategorie)

module.exports = route