import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import * as React from "react";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

interface Item {
  name_product: string;
  type_product: string;
  available: boolean;
  price: number;
  rating: number;
  warranty_years: number;
}

interface ItemsProps {
  produit : Item[];
}

function Items ({note, handleDelete}) {


  //! Affichage
  return (
    <Card elevation={3}>
      <CardHeader 

        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteForeverOutlinedIcon color="error"/>
          </IconButton>
        }
        title={note.name_product}
        subheader={note.type_product}
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary">
          {note.price.toFixed(2) + " $"}
        </Typography>
      </CardContent>
    </Card>
    
  )

}

export default Items;

