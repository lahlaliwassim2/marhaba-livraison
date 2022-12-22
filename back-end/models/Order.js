const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
    {
        user_id: {
            type: Number,
            ref: "User"
        },
        product_id: {
            type: Array,
            ref: "Product"
        },
        quantity: {
            type: Array,
            required: [true]
        },   
       
        status: {
                type: String, 
                enum: ['Pending', 'In Progress','Delivered'],
                default: 'Pending'
              },
        total_price: { 
                type: Number, 
            },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Order', orderSchema)
