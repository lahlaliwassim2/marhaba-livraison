const Ville = require('../models/Ville')

const addVille = async (req, res) => {

    const name = req.body.name

    try{
      const City = await  Ville.create({
        name : name
    })  
    res.status(201).json('added to City Collection');
    } catch {
    res.status(400).json({ message: error.message });
    }

    
}

module.exports = { addVille }