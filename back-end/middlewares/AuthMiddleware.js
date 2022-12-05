const User = require('../models/User')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const authMiddleware = asyncHandler(async(req,res,next)=>{
    let token ;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token = req?.headers?.authorization.split(" ")[1]
        try {
            if(token){
                const decode = jwt.verify(token,process.env.JWT_SECRET)
                const user = await User.findById(decode?.id)
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
module.exports = {
    authMiddleware,
    
}