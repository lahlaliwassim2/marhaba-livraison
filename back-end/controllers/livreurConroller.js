const livreur = require("../models/User");
const Role = require("../models/Role");
const mailer = require("../middlewares/mailer");
const password_khadija = require('secure-random-password');

const Addlivreur = async (req,res) => {
   const {body} = req
   if(!body.name || !body.email  || !body.phone) throw Error('Fill all filled')
   else {
      const findlivreur = await livreur.findOne({email:body.email})
      if(findlivreur) throw Error('email a already existed')
      else{
        // const passwor_generate_hash = await bcrypt.hash(generatePassword(),10)
        const generatePassword = password_khadija.randomPassword({ characters: [password_khadija.lower, password_khadija.upper, password_khadija.digits] })
            const role_livreur = await Role.findOne({name:'livreur'})
         const creatlivreur = await livreur.create({
            ...body,
            password: generatePassword,
            role_id: role_livreur._id,
            status:'Active',
         })
         if(!creatlivreur)
         throw Error('error')
        //  mailer.main('Addlivreur',creatlivreur)
         res.send(creatlivreur)
      }
  
}
}


module.exports =  Addlivreur 
