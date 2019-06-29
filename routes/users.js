const userRouter = require("express").Router();
const { check, validationResult } = require('express-validator');
var bcrypt = require('bcrypt');
// const { check, validationResult } = require('express-validator/check');
const db = require('../models');

userRouter.post("/api/users", (req, res) => {

    db.Users.create(req.body).then(function (DBUsers) {
        res.json(DBUsers);
    })
    // res.send(req.body);
});
userRouter.post("/login", (req, res) => {
    console.log("post to login, email = "+req.body.email);
    db.Users.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            console.log("login then");
            if (user) {
                console.log("then user exists, start bcrypt compareSync");
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    console.log("compareSync success");
                    res.send({ message: true, user })
                    console.log(user);
                } else {
                    console.log("compareSync failed");
                }
            } else {
                console.log("else no user");
                res.status(400).json({ error: "User does not exist" })
            }
        })
        .catch(err => {
            console.log("login catch err="+err);
            res.status(400).json({ error: err })
        })
})

userRouter.get("/api/allusers", function (req, res) {
    db.Users.findAll({}).then(function (dbUsers) {
        res.json(dbUsers);
    });
});

userRouter.get("/api/users:id", function (req, res) {
    db.Users.findOne({}).then(function (dbUsers) {
        res.json(dbUsers);
    });
});

userRouter.post("/register", (req, res) => {
    const now = new Date()
    const userData = {
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        isLoggedIn: 1,
        created_at: now
    }
    db.Users.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    db.Users.create(userData)
                        .then(user => {
                            res.json({ status: user.email + " registered" })
                        })
                        .catch(err => {
                            res.send("error: " + err)
                        })
                })
            } else {
                res.json({ error: "User already exists" })
            }
        })
        .catch(err => {
            res.send("error: " + err)
        })

})
userRouter.put("/login", (req, res) => {

    db.Users.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(userDb => {
            console.log(userDb.dataValues.email);
            let user = userDb.dataValues;
            //db.Users.update(userData)
            db.Users.update({isLoggedIn:1},{where:{email:user.email}})
                .then(user => {
                    res.json({ status: "User's isLoggedIn has changed" })
                })

        })
        .catch(err => {
            res.send("error: " + err)
        })

})



// res.send(req.body);


// userRouter.route("/users")
//   .get(userController.findAll)
//   .post(userController.create);

// userRouter.route("/users/:id")
//   .get(userController.findOne)
//   .delete(userController.delete);





module.exports = userRouter;