const express = require("express");
const {userController} = require('../controllers/index.js');
const productRouter= express.Router();


//!Route GET

// userRouter.get("/petsitter/:id", cw(userController.findUserById));
// productRouter.get("/products", )


module.exports = productRouter;