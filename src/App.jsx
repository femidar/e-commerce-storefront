import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/index.jsx";
import Category from "./components/Category/index.jsx"

export default function App() {
  let url = "https://fakestoreapi.com/products";

  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);

  function fetchProducts() {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div id="products">
      <Header title="Femi E-commerce Store" />
      <p>{loading === true && "Loading products..."}</p>
      <Category />
    </div>
  );
}
