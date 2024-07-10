import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';




const App = () => {

  //! States

    const [products,setProducts] = useState([]);
  //! Comportements

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  
  const getProducts = () => {

    fetch("http://localhost:5000/products")
    .then(res => res.json())
    .then(json => setProducts(json));

  }

  useEffect(() => {
    getProducts();
  }, []);

  //! Affichage
  return (
    <div className="App">
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <h1>Bon artisan </h1>
      <h3>Nos produits</h3>
      <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((product) => {
          return (
            
              <Grid key={product.id}  item xs={6}>
                <Item>
                <Card key={product.id} sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://picsum.photos/200/300/?greyscale"
                      title={product.name_product}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                       {product.name_product}
                      </Typography>
                      
                    </CardContent>
                    <CardActions>
                      <Button size="small" variant="contained">Afficher</Button>
                      <Button size="small" variant="outlined">Supprimer</Button>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
          
          )
        })}
          </Grid>
          </Box>
          </Container>
          </React.Fragment>
      
    </div>
  )
}

export default App
