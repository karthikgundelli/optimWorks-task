import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";


export default function UserDashboard() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")) || []);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          {p.title}
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}
    </div>
  );
}
