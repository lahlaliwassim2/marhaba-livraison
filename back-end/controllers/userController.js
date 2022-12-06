const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const { find, findOne } = require('../models/User')

//Get One User
const getOneUser = asyncHandler(async(req,res)=>{
    const {id}= req.params
    try {
        const getUser = await User.findOne({id})
            if(!getUser)throw new Error("no user found ")
            else res.json({getUser})   
    } catch (error) {
        throw new Error(error)
    }
})
//Get All User
const getAllUser = asyncHandler(async(req,res)=>{
    try {
        const getUsers = await User.find()
        if(!getUsers)throw new Error("no user found")
        else res.json({getUsers})
    } catch (error) {
        throw new Error("error")
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
    getAllUser,
    updateUser
}