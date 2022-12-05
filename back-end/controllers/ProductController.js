const Product = require("../models/Product");

const AddNewProduct = async (req, res) => {
  const newProduct = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    img: req.body.img,
    cat_id: req.body.categorie,
  };

  try {
    const insertProduct = await Product.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
      cat_id: req.body.categorie,
    });
    res.json("new product was added ");
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  AddNewProduct,
};
