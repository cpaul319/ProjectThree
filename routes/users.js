const userRouter = require("express").Router();
const userController = require("../controller/userController");
// const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');

userRouter.post("/api/users", (req, res)=>{
    const today= new Date();
    const userData ={
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        created: today,
        creditCardNumber: req.body.creeditCardNumber,
        expDate: req.body.expDate,
        cvv: req.body.cvv,
        swag1name: req.body.swag1name,
        swag1quantity: req.body.swag1quantity,
        swag2name: req.body.swag2name,
        swag2quantity: req.body.swag2quantity,
        swag3name: req.body.swag3name,
        swag3quantity: req.body.swag3quantity,
        swag4name: req.body.swag4name,
        swag4quantity: req.body.swag4quantity,
        swag5name: req.body.swag5name,
        swag5quantity: req.body.swag5quantity


    }
res.send(req.body);
});

// userRouter.route("/users")
//   .get(userController.findAll)
//   .post(userController.create);

// userRouter.route("/users/:id")
//   .get(userController.findOne)
//   .delete(userController.delete);


 


module.exports = userRouter;