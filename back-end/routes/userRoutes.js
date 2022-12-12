const express = require("express");
const { getOneUser, updateUser } = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/AuthMiddleware");
const errorHandller = require("../middlewares/errorHandller");
const tryCatch = require("../middlewares/tryCatch");

const router = express.Router();

router.get("/get-user/:id", authMiddleware, tryCatch(getOneUser));
router.put("/update-user/:id", authMiddleware, tryCatch(updateUser));

router.use(errorHandller);

module.exports = router;
