const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User,
            required: [true, 'Please add a name'],
        },
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref : Product,
            required: [true, 'Please add an email'],
            unique: true,
        },
        quantity: {
            type: Number,
            required: [true, 'Please add an password']
        },   
        adress: {
            type: Number,
            required: [true, 'Please add an phone Number']
        },   
   
        ville_id: 
            {
                type: mongoose.Schema.Types.ObjectId,
                ref : Ville ,
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
