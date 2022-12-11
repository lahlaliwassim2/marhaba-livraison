const User = require("../models/User");
const Order = require("../models/Order");
const Product = require("../models/Product");
const Comment = require("../models/Coment");
const Role = require("../models/Role");
const dotenv = require("dotenv").config();
const livreur_id = process.env.LIVREUR_ID;
const client_id = process.env.CLIENT_ID;

const TotalUsers = async (req, res) => {
  try {
    User.countDocuments({ role_id: client_id }, function (err, docCount) {
      if (err) {
        res.status(502).json(err);
      }
      console.log(`your total clients is ${docCount}`);
      res.status(200).json(docCount);
    });
  } catch (error) {
    throw new Error(error);
  }
};

const TotalLivreur = async (req, res) => {
  try {
    User.countDocuments({ role_id: livreur_id }, function (err, docCount) {
      if (err) {
        res.status(502).json(err);
      }
      console.log(`your total livreur is ${docCount}`);
      res.status(200).json(docCount);
    });
  } catch (error) {
    throw new Error(error);
  }
};

const TotalProduct = async (req, res) => {
  try {
    Product.countDocuments({}, function (err, docCount) {
      if (err) {
        res.status(502).json(err);
      }
      console.log(`your total product is ${docCount}`);
      res.status(200).json(docCount);
    });
  } catch (error) {
    throw new Error(error);
  }
};

const TotalComment = async (req, res) => {
  try {
    Comment.countDocuments({}, function (err, docCount) {
      if (err) {
        res.status(502).json(err);
      }
      console.log(`your total comments is ${docCount}`);
      res.status(200).json(docCount);
    });
  } catch (error) {
    throw new Error(error);
  }
};

const TotalOrders = async (req, res) => {
  try {
    Order.countDocuments({}, function (err, docCount) {
      if (err) {
        res.status(502).json(err);
      }
      console.log(`your total orders is ${docCount}`);
      res.status(200).json(docCount);
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  TotalUsers,
  TotalLivreur,
  TotalProduct,
  TotalComment,
  TotalOrders,
};
