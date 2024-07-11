import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Container, CssBaseline } from '@mui/material';
import Items from '../components/Items/Items';


const App = () => {
  //! Affichage
 return (
  <React.Fragment>
      <CssBaseline />
      <Container >
        <h1>Les Bons Artisans</h1>
        <h3>Nos produits</h3>
        <Stack direction={{ xs: 'column', sm: 'column' }} spacing={{ xs: 1, sm: 2, md: 1}}>
          <Items/> 
        </Stack>
      </Container>
    </React.Fragment>
  )
}

export default App
