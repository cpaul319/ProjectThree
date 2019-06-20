const userRouter = require("express").Router();
// const userController = require("../controllers/userController");
// const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');

userRouter.post("/", (req, res)=>{
res.send(req.body);
});

 


module.exports = userRouter;