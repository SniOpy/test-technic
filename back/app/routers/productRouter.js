const express = require("express");
const { productController } = require('../controllers');
const productRouter= express.Router();


//!Route GET

productRouter.get("/products", productController.findProducts);


module.exports = productRouter;