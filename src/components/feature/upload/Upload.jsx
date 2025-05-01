import React, { useState, useEffect } from "react";

function Upload() {
  const [file, setFile] = useState(null);
  const [htmlContent, setHtmlContent] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:3000/api/v1/upload/pdf", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setHtmlContent(data.htmlPath); // Assuming Nest returns `htmlPath`
  };

  const handleSave = async () => {
    if (!htmlContent) return;

    const updatedHtml = document.getElementById("editable-content").innerHTML;

    // Here, you can send the updated HTML back to the backend to save
    const response = await fetch("http://localhost:3000/api/v1/save/html", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ html: updatedHtml }),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload PDF</button>

      {htmlContent && (
        <div>
          <div
            id="editable-content"
            contentEditable="true"
            style={{
              border: "1px solid #ddd",
              minHeight: "300px",
              padding: "10px",
            }}
          >
            <iframe
              src={`http://localhost:3000${htmlContent}`}
              width="100%"
              height="500px"
            ></iframe>
          </div>

          <button onClick={handleSave}>Save Edited HTML</button>
        </div>
      )}
    </div>
  );
}

export default Upload;
