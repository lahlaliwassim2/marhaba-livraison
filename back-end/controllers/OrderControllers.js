const Order = require("../models/Order")
const OrderDetails = require("../models/OrderDetails")

const AddOrder = async (req,res)=>{
    const body = {
        user_id: req.user,
        adress : req.adress,
        ville_id : req.ville,
        tottal_price: req.total,
        order_details : req.OrderDetails
    }

    Order.insert([{...body}])
}

module.exports = {
    AddOrder
}