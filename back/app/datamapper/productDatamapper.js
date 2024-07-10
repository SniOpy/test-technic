const client = require('../services/clientPg');
// console.log(client);

const productDatamapper = {
    
    //! Récupère tous les produits en base de donnée
    getProducts : async () => {

        
        try {

            const query = "SELECT * FROM product";
            const productsFound = await client.query(query);
            return productsFound;

        } catch (error) {
            return console.error('Problème de recherche product');
        }
    }
};

module.exports = productDatamapper;