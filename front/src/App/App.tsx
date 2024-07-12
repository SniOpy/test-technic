import * as React from 'react';
import { Button, Container, Grid, TextField } from '@mui/material';
import Items from '../components/Items/Items';

import "./App.scss";


function App  ()  {

   //! States
   const [products, setProducts] = React.useState([]);

   const [newProduct, setNewProduct] = React.useState("Sam");

   //! Comportements

   function entierAleatoire(min, max)
  {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 
     const handleDelete = (id) => {
 
         //* copie du state
 
         const productsCopy = [...products];
 
         //* manipulation de la copie du state
         
         const productsCopyUpdated = productsCopy.filter(item => id !== item.id);
 
         //* Modification du state avec le setter
 
         setProducts(productsCopyUpdated);
 
     };

     const handleSubmit = (event) => {
      event.preventDefault();

      //! Définit un id
      const idNewProduct = new Date().getTime();
      const nameProduct = newProduct;
      const price= entierAleatoire(20,300);
      const warranty_years = entierAleatoire(1,3);
      const rating = entierAleatoire(1,5);
      const available = true;

      //! Copie du state
      const productCopy = [...products];

      //! Ajout du produit dans la copie du state
      productCopy.push({
        id:idNewProduct,
        name_product: nameProduct,
        type_product: "phone",
        price:price,
        warranty_years: warranty_years,
        rating: rating,
        available:available
      });
      
      //! On ajoute l'élément dans notre tableau
      setProducts(productCopy);
      

      
     }

     const handleChange = (event) => {
      const targetValue = event.target.value;

      setNewProduct(targetValue);

     }
 
   const getProducts = () => {
 
     fetch("http://localhost:5000/products")
     .then(res => res.json())
     .then(json => setProducts(json));
 
   }
 
   React.useEffect(() => {
     getProducts();
   }, []);
 
  //! Affichage
 return (
  <div className="App">
        <Container>
          <h1>Bons Artisans</h1>
          <h2>Nos produits</h2>

          <form action="submit" onSubmit={handleSubmit}>
            <TextField 
            id="name_product" 
            value={newProduct} l
            abel="Nom du produit" 
            variant="outlined" 
            onChange={handleChange}
            />

            <Button variant="contained" size="large" type='submit'>Ajouter</Button>
          </form><br/>

          <Grid container spacing={3}>
            {products.map((product) => (
            <Grid item key={product.id} xs={12} md={6} lg={4}>
              <Items note={product} handleDelete={handleDelete}/>
            </Grid>
            ))}
          </Grid> 
        </Container>
    </div>
  )
}

export default App
