// Création de la route index
const express = require("express");
const router = express.Router();

// Appel des routers
const productRouter = require('./productRouter');

// Appel de la route acceuil de l'API
router.get("/", (req,res) => {
    res.status(200).json("Bon artisan");
});

// Appel des routes products
router.use(productRouter);

module.exports = router;