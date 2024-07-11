import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Container, CssBaseline } from '@mui/material';
import Items from '../components/Items/Items';

import "./App.scss";


function App  ()  {
  //! Affichage
 return (
  <div className="App">
        <h1>Les Bons Artisans</h1>
        <h3>Nos produits</h3>
        
          <Items/> 
        
    </div>
  )
}

export default App
