import { useEffect, useState } from "react";

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
    <>
      <p>{loading === true && "Loading products..."}</p>
    </>
  ) 
}
