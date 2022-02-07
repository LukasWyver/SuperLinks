import "./link.css";
import { FiX, FiClipboard } from "react-icons/fi";

export default function LinkItem({ VisibleClosed, content }) {
  async function copyLink() {
    await navigator.clipboard.writeText(content.link);
  }

  return (
    <div className="modal-overlay active">
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Link Encurtado!</h2>
            <button onClick={VisibleClosed}>
              <FiX size={24} color="#f4075d" />
            </button>
          </div>
          <div className="modal-link">
            <span>{content.long_url}</span>
          </div>
          <button className="modal-link clipboard">
            {content.link}
            <FiClipboard size={20} color="#171717" onClick={copyLink} />
          </button>
        </div>
      </div>
    </div>
  );
}
