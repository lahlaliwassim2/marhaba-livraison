const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
    {
        user_id: {
            type: Number,
            ref: "User"
        },
        product_id: {
            type: Number,
            ref: "Product"
        },
        quantity: {
            type: Number,
            required: [true, 'Please add an password']
        },   
       
        status: {
                type: String, 
                enum: ['Pending', 'Active','Banned'],
                default: 'Pending'
              },
        tottal_price: { 
                type: Number, 
                unique: true
            },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Order', orderSchema)
