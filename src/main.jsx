import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Preview from "./components/Preview.jsx";
import Form from "./components/Form.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="resume-wrapper">
      <Form />
      <Preview />
    </div>
  </React.StrictMode>
);
