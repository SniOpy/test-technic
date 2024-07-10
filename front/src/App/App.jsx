import { useState } from "react";
import { useEffect } from "react";

const App = () => {

  //! States

    const [products,setProducts] = useState([]);
  //! Comportements
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
      <h1>Bon artisan </h1>
      <h3>Nos produits</h3>

      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>{product.name_product}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
