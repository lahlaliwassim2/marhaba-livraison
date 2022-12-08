const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var comentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    user_id: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      ],
      product_id: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
        }
      ],
    
},{
    timestamps: true,
}
);

//Export the model
module.exports = mongoose.model('Coment', comentSchema);