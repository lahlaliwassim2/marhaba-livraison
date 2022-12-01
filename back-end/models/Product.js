const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a title'],
        },
        description: {
            type: String,
            required: [true, 'Please add a description'],
        },
        price: {
            type: Number,
            required: [true, 'Please add a price'],
        },
        image: {
            type: String,
            required: [true, 'Please add a image'],
        },
        cat_id: {
            type: String,
            required: [true, 'Please add a categorie '],
        },
        
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Product', productSchema)
