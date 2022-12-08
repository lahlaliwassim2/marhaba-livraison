const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const validateMongoDbId = require('../utils/ValidationMongoId')

//Get One User
const getOneUser = asyncHandler(async(req,res)=>{
    const id = req.params
    // validateMongoDbId(id)

    try {
        const getUser = await User.findOne({id})
            if(!getUser)throw new Error("no user found ")
            else res.json({getUser})   
    } catch (error) {
        throw new Error(error)
    }
})

//Update User 
const updateUser = asyncHandler(async(req,res)=>{
    const {id} =req.user
    console.log(id)
    try {
        const updateUser = await User.findByIdAndUpdate(id,
            {
                name:req?.body?.name,
                email:req?.body?.email,
                phone:req?.body?.phone,
            },
            {
                new:true
            }
            )
            if(updateUser) res.json({updateUser})
            else throw new Error("no User fouand")
    } catch (error) {
        throw new Error(error)
    }
})
module.exports = {
    getOneUser,
    updateUser
}