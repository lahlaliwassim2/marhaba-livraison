const route = require("express").Router();
const {
  AddNewProduct,
  DeleteProduct,
  UpdateProduct,
  GetAllProduct,
  comentProduct,
} = require("../controllers/ProductController");
const upload = require("../utils/imageUploader");
const { authMiddleware } = require("../middlewares/AuthMiddleware");
const errorHandller = require("../middlewares/errorHandller");

route.post("/product/add", upload.single("image"), AddNewProduct);
route.get("/product", GetAllProduct)


route.delete("/product/delete/:id", DeleteProduct);
route.patch("/product/update/:id", UpdateProduct);
route.post("/comentproduct/:id", authMiddleware, comentProduct);


route.use(errorHandller);

module.exports = route;
