import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminPanel() {
  const [prices, setPrices] = useState({});
  const [gstRate, setGstRate] = useState(18);
  const [billing, setBilling] = useState({ base: 0, total: 0 });
  const [newPrice, setNewPrice] = useState({ category: "", size: "", price: 0 });

  useEffect(() => {
    axios.get("/api/prices").then((res) => setPrices(res.data));
  }, []);

  const updatePrice = () => {
    axios.post("/api/update-price", newPrice).then(() =>
      axios.get("/api/prices").then((res) => setPrices(res.data))
    );
  };

  const calculateBilling = () => {
    const total = billing.base * (1 + gstRate / 100);
    setBilling({ ...billing, total });
  };

  return (
    <section className="admin-panel">
      <h2>Admin Panel</h2>
      <h3>Billing Calculator (GST {gstRate}%)</h3>
      <input
        type="number"
        placeholder="Base Amount"
        onChange={(e) => setBilling({ ...billing, base: parseFloat(e.target.value) })}
      />
      <button onClick={calculateBilling}>Calculate Total</button>
      {billing.total > 0 && <p>Total with GST: ₹{billing.total.toFixed(2)}</p>}

      <h3>Update Prices</h3>
      <input
        placeholder="Category (residential/office/goods)"
        onChange={(e) => setNewPrice({ ...newPrice, category: e.target.value })}
      />
      <input
        placeholder="Size (e.g., 1BHK)"
        onChange={(e) => setNewPrice({ ...newPrice, size: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        onChange={(e) => setNewPrice({ ...newPrice, price: parseFloat(e.target.value) })}
      />
      <button onClick={updatePrice}>Save Price</button>
      <pre>{JSON.stringify(prices, null, 2)}</pre>
    </section>
  );
}