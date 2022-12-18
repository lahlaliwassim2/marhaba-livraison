const mongoose = require('mongoose')

const OrderDetailsSchema = mongoose.Schema({
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    
    quantity:{
        type: Number,
        default : 1 
    }, 
    price:{
        type: Number,
    }
})

module.exports = mongoose.model('OrderDetails', OrderDetailsSchema)
