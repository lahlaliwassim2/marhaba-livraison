const express = require('express');
const ville = require('../controllers/villeControllers');
const VilleRouter = express.Router();


VilleRouter.post('/addVille', ville.addVille);

module.exports = VilleRouter;