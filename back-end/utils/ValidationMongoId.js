const mongoose = require('mongoose')
var ObjectId = require('mongodb').ObjectId()

const validateMongoDbId = (id)=>{
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if(!isValid) throw new Error("this is not valid or not found")
}
module.exports = validateMongoDbId