import { useState, useCallback } from "react";
import ModelSelector from "./ModeSelector";
import AIGenerator from "./AIGenerator";
import ManualEditor from "./ManualEditor";
import "./GeneratePanel.css";

function Toast({ message, type, onClose }) {
  if (!message) return null;

  return (
    <div className={`toast ${type === "error" ? "toastError" : "toastSuccess"}`}>
      <span>
        {type === "error" ? "❌" : "✅"} {message}
      </span>

      <button className="toastClose" onClick={onClose}>
        ×
      </button>
    </div>
  );
}

export default function GenerateBlog() {

  const [mode, setMode] = useState("selector");
  const [manualInitialTitle, setManualInitialTitle] = useState("");
  const [manualInitialContent, setManualInitialContent] = useState("");

  const [toast, setToast] = useState({
    message: "",
    type: "success",
  });

  const showToast = useCallback((message, type = "success") => {
    setToast({
      message,
      type,
    });

    setTimeout(() => {
      setToast({
        message: "",
        type: "success",
      });
    }, 3500);
  }, []);

  const handleModeSelect = (m) => {
    setMode(m);

    if (m === "manual") {
      setManualInitialTitle("");
      setManualInitialContent("");
    }
  };

  const handleEditManually = (output) => {
    setManualInitialTitle(output.title);
    setManualInitialContent(output.body);
    setMode("manual");

    showToast(
      "AI content loaded into editor — edit away!",
      "success"
    );
  };

  const handlePublish = (data) => {
    // Hook: POST /api/blogs with data
    console.log("Publishing blog:", data);
  };

  return (
    <div className="page">
      {mode === "selector" && (
        <ModelSelector onSelect={handleModeSelect} />
      )}

      {mode === "manual" && (
        <ManualEditor
          onBack={() => setMode("selector")}
          initialTitle={manualInitialTitle}
          initialContent={manualInitialContent}
          onPublish={handlePublish}
          showToast={showToast}
        />
      )}

      {mode === "ai" && (
        <AIGenerator
          onBack={() => setMode("selector")}
          onEditManually={handleEditManually}
          showToast={showToast}
        />
      )}

      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() =>
          setToast({
            message: "",
            type: "success",
          })
        }
      />
    </div>
  );
}