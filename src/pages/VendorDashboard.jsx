import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function VendorDashboard() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(all.filter(p => p.vendorId === user.id));
  }, []);

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      title,
      price: 100,
      vendorId: user.id
    };
    const all = JSON.parse(localStorage.getItem("products")) || [];
    localStorage.setItem("products", JSON.stringify([...all, newProduct]));
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h2>Vendor Dashboard</h2>
      <input placeholder="Product Title" onChange={e => setTitle(e.target.value)} />
      <button onClick={addProduct}>Add Product</button>

      {products.map(p => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
}
