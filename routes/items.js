const itemRouter = require("express").Router();
 
const db = require('../models');
process.env.SECRET_KEY = "secret";


itemRouter.post("/items", (req, res) => {

    const now = new Date()
    const userData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        created_at: now
    }
    db.Items.create(userData)
        .then(user => {
            res.json({ status: user.name + " Item added" })
        })
        .catch(err => {
            res.send("error: " + err)
        })
})

module.exports = itemRouter;
 