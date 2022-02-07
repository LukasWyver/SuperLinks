import React, { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";

import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";
import api from "../../services/api";

export default function Home() {
  const [link, setLink] = useState("");
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });
      setData(response.data);
      setShowModal(true);
    } catch {
      alert("Ops parece que algo deu errado!");
    } finally {
      setLink("");
    }
  }

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
          <input
            placeholder="cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Gerar link</button>
      </div>

      <Menu />

      {showModal && (
        <LinkItem
          VisibleClosed={(showModal) => setShowModal(!showModal)}
          content={data}
        />
      )}
    </div>
  );
}
