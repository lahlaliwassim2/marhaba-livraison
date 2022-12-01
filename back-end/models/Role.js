const mongoose = require('mongoose')

const roleSchema = mongoose.Schema(
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

module.exports = mongoose.model('Role', roleSchema)
