const villeRoute = require('express').Router()

const  ville = require('../controllers/villeControllers')


villeRoute.post('/addVille', ville.addVille)

module.exports = villeRoute;