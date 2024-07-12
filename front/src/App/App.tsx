import * as React from 'react';
import { Container, Grid } from '@mui/material';
import Items from '../components/Items/Items';

import "./App.scss";


function App  ()  {

   //! States
   const [products, setProducts] = React.useState([]);

   //! Comportements
 
     const handleDelete = (id) => {
 
         //* copie du state
 
         const productsCopy = [...products];
 
         //* manipulation de la copie du state
         
         const productsCopyUpdated = productsCopy.filter(item => id !== item.id);
 
         //* Modification du state avec le setter
 
         setProducts(productsCopyUpdated);
 
     };
 
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
