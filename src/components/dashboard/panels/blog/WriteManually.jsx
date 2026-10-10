import { useState, useRef, useCallback } from "react";

import { TOPICS } from ".../../../data/dashboardData";
import { TOOLBAR_ACTIONS } from "../../../data/editorToolbar";

// --- Manual Editor ---------------------------------------------------------

export default function ManualEditor({ onBack, initialTitle = "", initialContent = "", onPublish, showToast }) {
  const [title, setTitle] = useState(initialTitle);
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("Draft");
  const [tags, setTags] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [saving, setSaving] = useState(false);
  const editorRef = useRef(null);

  const handleEditorInput = useCallback(() => {
    const text = editorRef.current?.innerText.trim() || "";
    setWordCount(text ? text.split(/\s+/).length : 0);
  }, [1]);

  const execFormat = useCallback((cmd) => {
    editorRef.current.focus();
    switch (cmd) {
      case "h2": document.execCommand("formatBlock", false, "h2"); break;
      case "h3": document.execCommand("formatBlock", false, "h3"); break;
      case "ul": document.execCommand("insertUnorderedList"); break;
      case "ol": document.execCommand("insertOrderedList"); break;
      case "quote": document.execCommand("formatBlock", false, "blockquote"); break;
      case "link": {
        const url = window.prompt("Enter URL:");
        if (url) document.execCommand("createLink", false, url);
        break;
      }
      default: document.execCommand(cmd);
    }
    handleEditorInput();
  }, [handleEditorInput, 18, 19]);

  const handleSaveDraft = () => {
    const t = title.trim() || "Untitled";
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      showToast(`"${t}" saved as draft ✓`, "success");
    }, 600);
  };

  const handlePublish = () => {
    if (!title.trim()) return showToast("Please add a title before publishing.", "error");
    const content = editorRef.current.innerText.trim() || "";
    if (content.length < 10) return showToast("Please write some content before publishing.", "error");
    if (!category) return showToast("Please select a category.", "error");
    onPublish?.({ title, category, status, tags, content });
    showToast(`"${title}" published successfully! 🚀`, "success");
    setTimeout(() => onBack(), 1200);
  };

  // Set initial content from AI if provided
  const editorRefCallback = useCallback((node) => {
    if (node && initialContent) {
      node.innerHTML = initialContent;
      const text = node.innerText.trim() || "";
      setWordCount(text ? text.split(/\s+/).length : 0);
    }
    editorRef.current = node;
  }, [initialContent, 20]);

  return (
    <div style={S.editorWrap}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <BackButton onClick={onBack} />
        <span style={{ color: "#E8E8E8" }}>|</span>
        <h2 style={S.sectionTitle}>Write Your Blog</h2>
      </div>

      {/* Editor card */}
      <div style={S.card}>
        {/* Meta section */}
        <div style={{ padding: "24px 28px", borderBottom: "1px solid #E8E8E8" }}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog title..."
            style={S.titleInput}
          />
          <div style={S.metaGrid}>
            <div>
              <label style={S.label}>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} style={S.select}>
                <option value="">Select category</option>
                {TOPICS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label style={S.label}>Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)} style={S.select}>
                <option>Draft</option>
                <option>Published</option>
              </select>
            </div>
            <div>
              <label style={S.label}>Tags</label>
              <input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="e.g. AI, Health, 2026"
                style={S.input}
              />
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div style={S.toolbar}>
          {TOOLBAR_ACTIONS.map((action, i) =>
            action.divider ? (
              <div key={`div-${i}`} style={S.toolbarDivider} />
            ) : (
              <button
                key={action.cmd}
                onMouseDown={(e) => { e.preventDefault(); execFormat(action.cmd); }}
                style={{ ...S.toolbarBtn, ...(action.style || {}) }}
                title={action.cmd}
              >
                {action.label}
              </button>
            )
          )}
          <div style={{ flex: 1 }} />
          <span style={{ fontSize: 11, color: "#AAA", whiteSpace: "nowrap" }}>
            {wordCount} {wordCount === 1 ? "word" : "words"}
          </span>
        </div>

        {/* Editable area */}
        <div
          ref={editorRefCallback}
          contentEditable
          suppressContentEditableWarning
          onInput={handleEditorInput}
          data-placeholder="Start writing your blog here... Share your ideas, tell your story, or explain your expertise."
          style={S.editorArea}
        />
      </div>

      {/* Action bar */}
      <div style={S.actionsRow}>
        <span style={{ fontSize: 13, color: "#AAA" }}>
          {saving ? "Saving..." : "Auto-saved as draft"}
        </span>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={handleSaveDraft} style={S.btnOutline}>
            Save Draft
          </button>
          <button onClick={handlePublish} style={S.btnOrange}>
            Publish Blog →
          </button>
        </div>
      </div>

      {/* Editor inline styles */}
      <style>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #BBB;
          pointer-events: none;
        }
        [contenteditable] h2 {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: #111;
          margin: 24px 0 10px;
        }
        [contenteditable] h3 {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: #111;
          margin: 18px 0 8px;
        }
        [contenteditable] blockquote {
          border-left: 3px solid #E84A0C;
          padding: 10px 18px;
          margin: 16px 0;
          color: #666;
          font-style: italic;
          background: #FDF1EC;
          border-radius: 0 8px 8px 0;
        }
        [contenteditable] a { color: #E84A0C; }
        [contenteditable] ul, [contenteditable] ol { padding-left: 20px; }
      `}</style>
    </div>
  );
}
