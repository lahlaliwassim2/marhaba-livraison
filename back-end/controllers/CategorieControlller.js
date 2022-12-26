const Categorie = require("../models/Categorie");
const asyncHandler = require("express-async-handler");

const AddNewCategorie = async (req, res) => {
  const { name } = req.body;
  const ifCategorieExist = await Categorie.findOne({ name });

  if (!ifCategorieExist) {
    try {
      const user = await Categorie.create({
        name,
      });
      res.status(201).json("New Categorie was added");
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else res.json("categorie already exist");
};

const DeleteCategorie = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const DeleteCategorie = await Categorie.findByIdAndDelete({ id });
    if (DeleteCategorie)
      res.status(200).json({
        message: "categorie deleted",
      });
  } catch (error) {
    throw new Error(error);
  }
});
const GetAllCategories =async (req,res)=>{
 const allCategories=await Categorie.find()
  try {
    if (allCategories) res.status(200).json(allCategories);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  AddNewCategorie,
  DeleteCategorie,
  GetAllCategories
};
