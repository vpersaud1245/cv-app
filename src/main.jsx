import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ResumeBuilder from "./components/Form.jsx";
import Button from "./components/Button.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Button />
    <ResumeBuilder />
  </React.StrictMode>
);
