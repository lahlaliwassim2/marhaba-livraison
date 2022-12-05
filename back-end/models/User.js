const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please add an password']
        },   
        phone: {
            type: Number,
            required: [true, 'Please add an phone Number']
        },   
        role_id: [
                {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "Role"
                }
              ],
        ville_id:
            {
                type: Number, 

            },
        status: {
                type: String, 
                enum: ['Pending', 'Active','Banned'],
                default: 'Pending'
              }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema)
