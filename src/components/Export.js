import React from "react";

export default function Export() {
  const exportData = () => {
    console.log("Exporting...");
  };
  return (
    <div>
      <button onClick={exportData} className="h_button">
        Export
      </button>
    </div>
  );
}
