const villeRoute = require('express').Router()

const  ville = require('../controllers/villeControllers')


villeRoute.post('/villeAdd', ville.addVille)

module.exports = villeRoute;