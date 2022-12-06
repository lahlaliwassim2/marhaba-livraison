const Categorie = require("../models/Categorie");

const AddNewCategorie = async (req, res) => {
  const { name } = req.body;
  const ifCategorieExist = await Categorie.findOne({name});

  if(!ifCategorieExist){
    try {
        const user = await Categorie.create({
          name,
        });
        res.status(201).json('New Categorie was added');
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }else res.json('categorie already exist')
  }

//   const DeleteCategorie = 
 

module.exports = {
  AddNewCategorie,
};
