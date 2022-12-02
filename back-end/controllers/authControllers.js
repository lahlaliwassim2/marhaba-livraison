const User = require('../models/User')
const Role = require('../models/Role')
const jwt = require('jsonwebtoken')
var storage = require('local-storage')
const bcrypt = require('bcryptjs')

const register = async (req,res) => {
    const {body} = req
    if(!body.name || !body.email || !body.password ||!body.phone ) res.send('Fill all filled')
    else{
        const finduser = await User.findOne({email: body.email})
        if(finduser) res.send('email a already existed')
        else{
            const password_hash = await bcrypt.hash(body.password, 10)
            const client_role = await Role.findOne({name: 'client'})
            if(client_role){
                const user = await User.create({...body, password: password_hash, role: client_role._id, status: 'Pending'})
                if(user) res.send(user)
                else res.send('error')
            }
        }
    }
}

module.exports = {
    register
}