const User = require('../models/User')
const Role = require('../models/Role')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler');

const authMiddleware = asyncHandler(async(req,res,next)=>{
    let token ;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token = req?.headers?.authorization.split(" ")[1]
        try {
            if(token){
                const decode = jwt.verify(token,process.env.SECRET_TOCKEN) 
                const user = await User.findById(decode?._id)
                req.user= user ;
                console.log(req.user)
                next()
            }
        } catch (error) {
            throw new Error ("Not Aithorized token expired, Please Login again")
        }
    }else{
        throw new Error("il y a aucune token attacher au header")
    }
})

const isAdmin = asyncHandler(async(req,res,next)=>{
    const {email} = req.user
    console.log(email)
    const isAdmin = await User.findOne({email}).populate("role_id")
    if(isAdmin.role_id.name == 'manager') throw  Error("you are not admin")
    else next()
})

module.exports = {
    authMiddleware,
    isAdmin
    
}