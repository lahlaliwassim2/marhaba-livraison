const mongoose = require('mongoose')

const categorieSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
        },

    
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('categories', categorieSchema)
