const Ville = require('../models/Ville')

const addVille = async (req, res) => {

    const {name} = req.body
    console.log(name)
    try{
      const City = await Ville.create({
        name,
      }
     ) 
     if(City) res.status(201).json('added to City Collection');
      else throw new Error("not created")
    } catch (err) {
    throw new Error(err)
    }

    
}

module.exports = { addVille }