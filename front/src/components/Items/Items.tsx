import * as React from "react";
import ColorButtons from '../ColorButtons/ColorButtons';
import  CardMedia  from "../CardMedia/CardMedia";

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

function Items () {

  return (
  <div>
    <CardMedia/>
  </div>
  )

}

export default Items;

