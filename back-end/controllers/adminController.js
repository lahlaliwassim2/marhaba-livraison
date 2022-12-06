const asyncHandler = require('express-async-handler')
const User = require('../models/User')

//Get All Users
const getAllUser = asyncHandler(async(req,res)=>{
    try {
        const getUsers = await User.find()
        if(!getUsers)throw new Error("no user found")
        else res.json({getUsers})
    } catch (error) {
        throw new Error("error")
    }
})

const bindUser = asyncHandler(async(req,res)=>{
    const {id} = req.params
    try {
        
    } catch (error) {
        
    }
})

//Bind User By Id
const binUser = asyncHandler(async(req,res)=>{
    const {id} = req.params
    console.log(id)
    try {
        const bindUser = await User.findByIdAndUpdate(
            id,
            {
                 status:"banned"
            },
            {
                new: true
            }
        )
        if(bindUser) res.json({
            message:"User is banned"
        })
        else throw new Error('no user found')
    } catch (error) {
        throw new Error(error)
    }
})
module.exports = {
    getAllUser,
    binUser
}