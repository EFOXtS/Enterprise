import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PriceEstimator() {
  const [pricing, setPricing] = useState({});
  const [selection, setSelection] = useState({ type: "", size: "" });
  const [estimate, setEstimate] = useState(null);

  useEffect(() => {
    axios.get("/api/prices").then((res) => setPricing(res.data));
  }, []);

  const calculate = () => {
    const price = pricing?.[selection.type]?.[selection.size];
    setEstimate(price ? `Estimated price: ₹${price}` : "Please select valid options");
  };

  return (
    <section className="price-estimator">
      <h2>Price Estimate Generator</h2>
      <select onChange={(e) => setSelection({ ...selection, type: e.target.value })}>
        <option value="">Select Service</option>
        <option value="residential">Residential Shifting</option>
        <option value="office">Office Shifting</option>
        <option value="goods">Goods Transport</option>
      </select>
      {selection.type && (
        <select onChange={(e) => setSelection({ ...selection, size: e.target.value })}>
          <option value="">Select Size</option>
          {Object.keys(pricing?.[selection.type] || {}).map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      )}
      <button onClick={calculate}>Get Estimate</button>
      {estimate && <p>{estimate}</p>}
    </section>
  );
}