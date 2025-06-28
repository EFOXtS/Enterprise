import React from "react";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import PriceEstimator from "./components/PriceEstimator";
import CallbackForm from "./components/CallbackForm";
import Reviews from "./components/Reviews";
import AdminPanel from "./components/AdminPanel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ImageSlider />
              <section className="bio">
                <h2>About Mamta Enterprises</h2>
                <p>
                  We are a trusted local logistics and home-shifting company committed to safe,
                  efficient and reliable services for your home or office moves.
                </p>
              </section>
              <PriceEstimator />
              <CallbackForm />
              <Reviews />
            </>
          }
        />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}