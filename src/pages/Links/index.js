import React from "react";
import { Link } from "react-router-dom";
import "./links.css";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";

export default function Links() {
  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#e5e5e5" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      <LinkItem textLink="https:/www.google.com" />
      <LinkItem textLink="https:/github.com/lukaswyver" />
      <LinkItem textLink="https:/www.facebook.com" />
    </div>
  );
}

function LinkItem({ textLink }) {
  return (
    <div>
      <div className="links-item">
        <button className="link">
          <FiLink size={18} color="#f5f5f5" />
          {textLink}
        </button>
        <button className="link-delete">
          <FiTrash size={24} color="#f4075d" />
        </button>
      </div>
      <div className="divider" />
    </div>
  );
}
