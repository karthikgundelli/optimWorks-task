import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, clearCart } = useCart();

  const checkout = () => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({
      id: Date.now(),
      items: cart,
      date: new Date().toLocaleString()
    });
    localStorage.setItem("orders", JSON.stringify(orders));
    clearCart();
    alert("Order placed!");
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(p => <div key={p.id}>{p.title}</div>)}
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
