const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
    {
        user_id: {
            type: Number,
            required: [true, 'Please add a name'],
        },
        products_order: {
            type: Number,
            required: [true, 'Please add an email'],
            unique: true,
        },  
        adress: {
            type: Number,
            required: [true, 'Please add an phone Number']
        },   
   
        ville_id: 
            {
                type: Number, 
                required: [true]

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
