const User = require('../models/User')
const Role = require('../models/Role')
const jwt = require('jsonwebtoken')

const asyncHandler = require('express-async-handler');
const { findById, findOne } = require('../models/User');

const authMiddleware = asyncHandler(async(req,res,next)=>{
    let token ;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token = req?.headers?.authorization.split(" ")[1]
        try {
            if(token){
                const decode = jwt.verify(token,process.env.SECRET_TOCKEN)
               
                const user = await User.findById(decode?._id)
                req.user= user ;
                next()
            }
        } catch (error) {
            throw new Error("Not Aithorized token expired, Please Login again")
        }
    }else{
        throw new Error("il y a aucune token attacher au header")
    }
    
})
const isAdmin = asyncHandler(async(req,res,next)=>{
    const {email} = req.user
    console.log(email)
    const isAdmin = await User.findOne({email})
    const admin_role = await Role.findOne({name:'manager'})
    if(isAdmin?.role_id !== admin_role?._id){
        next(new Error("you are not admin"))
        console.log("hzdh")
    }
    else{
        next()
    }
})
module.exports = {
    authMiddleware,
    isAdmin
    
}