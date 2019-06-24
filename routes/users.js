const userRouter = require("express").Router();

// const { check, validationResult } = require('express-validator/check');
const db = require('../models');

userRouter.post("/api/users", (req, res)=>{
   
    db.Users.create(req.body).then(function(DBUsers) {
        res.json(DBUsers);
    })  
// res.send(req.body);
});

    userRouter.get("/api/allusers", function(req, res)    {
        db.Users.findAll({}).then(function (dbUsers) {
            res.json(dbUsers);
          });
    });

    userRouter.get("/api/users:id", function(req, res)    {
        db.Users.findOne({}).then(function (dbUsers) {
            res.json(dbUsers);
          });
    });

// res.send(req.body);


// userRouter.route("/users")
//   .get(userController.findAll)
//   .post(userController.create);

// userRouter.route("/users/:id")
//   .get(userController.findOne)
//   .delete(userController.delete);


 


module.exports = userRouter;