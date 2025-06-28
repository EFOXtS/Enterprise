import React from "react";

const reviews = [
  { name: "Amit", text: "Excellent service!" },
  { name: "Priya", text: "Safe and fast shifting!" },
  { name: "Rahul", text: "Highly recommend!" }
];

const bgImages = [
  "/placeholder-images/bg1.jpg",
  "/placeholder-images/bg2.jpg"
];

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="background-slider">
        {bgImages.map((src, i) => (
          <img key={i} src={src} alt={`bg ${i}`} className="background" />
        ))}
      </div>
      <h2>Customer Reviews</h2>
      <div className="review-tiles">
        {reviews.map((r, i) => (
          <div key={i} className="tile">
            <strong>{r.name}</strong>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}