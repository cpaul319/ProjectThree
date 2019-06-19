const userRouter = require("express").Router();
const userController = require("../controllers/userController");
const { check, validationResult } = require('express-validator/check');

userRouter.route("/users")
  .get(userController.findAll)
  .post(userController.create);

 
userRouter.route("/users/:id")
  .get(userController.findOne)
  .delete(userController.delete);

module.exports = userRouter;