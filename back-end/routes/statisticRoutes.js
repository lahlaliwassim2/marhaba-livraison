const route = require("express").Router();
const { authMiddleware } = require("../middlewares/AuthMiddleware");
const {TotalUsers,TotalLivreur,TotalProduct,TotalComment} = require('../controllers/StatisticController')


route.get('/totalusers', TotalUsers)
route.get('/totallivreurs', TotalLivreur)
route.get('/totalproducts', TotalProduct)
route.get('/totalcomments', TotalComment)

module.exports = route
