import { useEffect, useState } from "react";
import "./App.css"

export default function App() {
  let url = "https://fakestoreapi.com/products";

  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);

  function fetchProducts() {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div id="products">
      <p>{loading === true && "Loading products..."}</p>
    </div>
  ) 
}
