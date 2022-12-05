const Categorie = require("../models/Categorie");



const AddNewCategorie = async (req, res) => {
  const { name } = req.body;
  try {
    const user = await Categorie.create({
      name,
    });
    res.status(201).json('New Categorie was added');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  AddNewCategorie,
};
