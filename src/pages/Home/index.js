import React from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";

import Menu from "../../components/Menu";

export default function Home() {
  return (
    <div className="container-home">
      {/* Header */}
      <div className="logo">
        <img src="/logodois.png" alt="Super Links logo" />
        <h1>Super</h1>
        <span>Cole seu link para encurtar... 👇</span>
      </div>

      {/* Inputs */}
      <div className="area-input">
        <div>
          <FiLink size={24} color="#f5f5f5" />
          <input placeholder="cole seu link aqui..." />
        </div>
        <button>Gerar link</button>
      </div>

      <Menu />
    </div>
  );
}
