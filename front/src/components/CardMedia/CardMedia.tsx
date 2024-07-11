import * as React from 'react';
import {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import { light } from '@mui/material/styles/createPalette';

export default function ImgMediaCard() {

    //! States

    const [products, setProducts] = useState([]);
  //! Comportements



  const handleDelete = (id) => {

    //* Copie du state
    const productsCopy = [...products];

    //* manipulation de la copie

    const productUpdated = productsCopy.filter(product => product.id !== id)
    
    
    //* on utilise le setter afin de modifier le state
    setProducts(productUpdated);
  }
  

  const getProducts = () => {

    fetch("http://localhost:5000/products")
    .then(res => res.json())
    .then(json => setProducts(json));

  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
        {products.map((product) => 
            (
                <Card key={product.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt=""
              height="140"
              image="../../public/3.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name_product}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              
              </Typography>
              <Typography variant="body2" color="text.secondary">
              
              </Typography>
              <Typography variant="body2" color="text.secondary">
      
              
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant='contained'>Afficher</Button>
              <Button size="small" variant='outlined' onClick={() => handleDelete(product.id)}>Supprimer</Button>
            </CardActions>
          </Card>
            )
        )}
    </div>
  )
}