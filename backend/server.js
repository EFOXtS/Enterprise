const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const dbFile = "./db.json";

const loadDB = () => JSON.parse(fs.readFileSync(dbFile, "utf-8"));
const saveDB = (data) => fs.writeFileSync(dbFile, JSON.stringify(data, null, 2));

app.get("/api/prices", (req, res) => {
  const db = loadDB();
  res.json(db.prices);
});

app.post("/api/update-price", (req, res) => {
  const db = loadDB();
  const { category, size, price } = req.body;
  if (!db.prices[category]) db.prices[category] = {};
  db.prices[category][size] = price;
  saveDB(db);
  res.json({ success: true });
});

app.post("/api/callbacks", (req, res) => {
  const db = loadDB();
  db.callbacks.push(req.body);
  saveDB(db);
  res.json({ success: true });
});

app.listen(5000, () => console.log("Backend running on port 5000"));