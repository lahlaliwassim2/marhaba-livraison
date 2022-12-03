const Order = require('../models/Order');
const Product = require('../models/Product')
const User = require('../models/User')
const Ville = require('../models/Ville')

const addOrders = (req, res) => {
    const {body} = req
    req.body.ville = [ville_id]
    req.body.user = [user_id]

}

const getOrdersByVille = (req, res) =>{
    const villeId = user.ville_id
    Ville.findOne({_id: villeId })
    Order.find()
}



module.exports = getOrdersByVille

