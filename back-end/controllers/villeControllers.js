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

const showVille = async (req, res) => {
  const allVille = await Ville.find({});
  if (allVille) res.send({ allVille }) 
  else res.json({msg : 'no cities data'});
}

module.exports = { addVille, showVille }