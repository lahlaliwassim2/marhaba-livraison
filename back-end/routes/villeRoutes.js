const villeRoute = require('express').Router()

const  ville = require('../controllers/villeControllers')


villeRoute.post('/addVille', ville.addVille)
villeRoute.get('/showVille', ville.showVille)

module.exports = villeRoute;