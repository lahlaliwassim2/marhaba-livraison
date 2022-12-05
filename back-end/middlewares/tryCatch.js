const { models } = require("mongoose");
const tryCatch = (param) => async (req, res, next) => {
  try {
    await param(req, res);
  } catch (error) {
    next(error);
  }
};
module.exports=tryCatch
