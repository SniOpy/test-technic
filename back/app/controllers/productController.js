const { productDatamapper } = require("../datamapper/");

const productController = {

    findProducts : async (req,res) => {
        

        try{
            
            const products = await productDatamapper.getProducts();
            res.status(200).json(products.rows);

        }catch(error) {
            console.error(error);
        }
    }
};

module.exports = productController;