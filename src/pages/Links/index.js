import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./links.css";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { getLinksSave, deleteLink } from "../../services/storeLinks";
import LinkItem from "../../components/LinkItem";

export default function Links() {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave("@encurtaLink");

      if (result.length === 0) {
        //nossa lista esta vazia...
        setEmptyList(true);
      }
      setMyLinks(result);
    }
    getLinks();
  }, []);

  function handleOpenLink(link) {
    setData(link);
    setShowModal(true);
  }

  async function handleDelete(id) {
    const result = await deleteLink(myLinks, id);

    if (result.length === 0) {
      setEmptyList(true);
    }
    setMyLinks(result);
  }

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#e5e5e5" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      {emptyList && (
        <div className="links-item">
          <h2 className="empty-text">Sua lista está vazia... 😅</h2>
        </div>
      )}
      {myLinks.map((link) => (
        <div key={link.id}>
          <div className="links-item">
            <button className="link" onClick={() => handleOpenLink(link)}>
              <FiLink size={18} color="#f5f5f5" />
              {link.long_url}
            </button>
            <button
              className="link-delete"
              onClick={() => handleDelete(link.id)}
            >
              <FiTrash size={24} color="#f4075d" />
            </button>
          </div>
          <div className="divider" />
        </div>
      ))}

      {showModal && (
        <LinkItem
          VisibleClosed={(showModal) => setShowModal(!showModal)}
          content={data}
        />
      )}
    </div>
  );
}
