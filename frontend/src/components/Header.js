import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed-header">
      <img src={logo} alt="Mamta Enterprises" height={50} />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  );
}