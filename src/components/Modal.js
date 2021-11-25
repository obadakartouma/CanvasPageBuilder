import React, { useRef, useState } from "react";

export default function Modal({ handleClose, show, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-header">
          <h2>Copy and Paste in your Canvas Page as Html</h2>
          {document.queryCommandSupported("copy") && (
            <>
              <button
                className="h_button"
                style={{ marginBottom: "10px" }}
                onClick={copyToClipboard}
              >
                Copy
              </button>
              {copySuccess}
            </>
          )}
        </div>
        <label className="textareaContainer">
          <textarea
            ref={textAreaRef}
            className="modal-input"
            value={children}
          />
        </label>

        <button className="modal-button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
}
