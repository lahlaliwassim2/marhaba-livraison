const Product = require("../models/Product");
const Categorie = require('../models/Categorie')
const asyncHandler = require('express-async-handler')
const mongoose = require("mongoose")

const upload = require("../utils/imageUploader");
const Coment = require("../models/Coment");


const AddNewProduct = async (req, res) => {
  const newProduct = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    Image:req.body.Image,
    cat_id: req.body.categorie,
  };

  try {
    const insertProduct = await Product.create(newProduct);
    if (insertProduct) {
      res.status(201).json("new product was added ");
    } else res.json("something wrong");
  } catch (error) {
    throw new Error(error);
  }
};

const DeleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findOneAndDelete({ _id: id });
    res.status(200).json({ code: 200, message: "Product deleted" });
  } catch (error) {
    throw new Error(error);
  }
};


const UpdateProduct = async (req, res) => {
    
};


const findAllProduct = asyncHandler(async(req,res)=>{
      const findAllProduct = await Product.find().populate("Categorie")
      try {
        if(findAllProduct) res.json({findAllProduct})
        else throw new Error("no product found")
      } catch (error) {
        throw new Error(error)
      }

})

const comentProduct = asyncHandler(async(req,res)=>{
  const user_id = req.user._id
  const product_id = req.params
  const contenu= req.body.content
  console.log(contenu)
  try {
      const addComent = await Coment.create({
        content:contenu,
        user_id:[mongoose.Types.ObjectId(user_id)],
        product_id:[mongoose.Types.ObjectId(product_id)]
      })
      if(addComent) res.json({
        addComent
      })
      else throw new Error('no coment added')
  } catch (error) {
    throw new Error(error)
  }
})


module.exports = {
  AddNewProduct,
  DeleteProduct,
  UpdateProduct,
  /* It's a comment */
  findAllProduct,
  comentProduct
};
