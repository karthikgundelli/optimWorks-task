export default function Orders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div>
      <h2>Orders</h2>
      {orders.map(o => (
        <div key={o.id}>
          Order #{o.id} - {o.date}
        </div>
      ))}
    </div>
  );
}
