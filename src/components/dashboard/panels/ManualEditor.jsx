import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TOPICS, TOOLBAR_ACTIONS } from "../../../data/dashboardData";
import { BackButton } from "../../ui/Button/Button";
import "./GeneratePanel.css";

export default function ManualEditor({
  onBack,
  initialTitle = "",
  initialContent = "",
  onPublish,
  showToast,
}) {

  const [title, setTitle] = useState(initialTitle);
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("Draft");
  const [tags, setTags] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [saving, setSaving] = useState(false);
  const [coverImage, setCoverImage] = useState(null);

  const editorRef = useRef(null);
  const coverInputRef = useRef(null);

  useEffect(() => {
    setTitle(initialTitle || "");
  }, [initialTitle]);

  useEffect(() => {
    if (!editorRef.current) return;
    editorRef.current.innerHTML = initialContent || "";
    const text = editorRef.current.innerText?.trim() || "";
    setWordCount(
      text ? text.split(/\s+/).length : 0
    );
  }, [initialContent]);

  const handleEditorInput = useCallback(() => {
    if (!editorRef.current) return;
    const text =
      editorRef.current.innerText?.trim() || "";
    setWordCount(
      text ? text.split(/\s+/).length : 0
    );
  }, []);

  const execFormat = useCallback(
    (cmd) => {
      if (!editorRef.current) return;
      editorRef.current.focus();

      switch (cmd) {
        case "h2":
          document.execCommand("formatBlock", false, "h2");
          break;
        case "h3":
          document.execCommand("formatBlock", false, "h3");
          break;
        case "ul":
          document.execCommand("insertUnorderedList");
          break;
        case "ol":
          document.execCommand("insertOrderedList");
          break;
        case "quote":
          document.execCommand("formatBlock", false, "blockquote");
          break;
        case "link": {
          const url = window.prompt("Enter URL:");
          if (url) {
            document.execCommand("createLink", false, url);
          }
          break;
        }
        default:
          document.execCommand(cmd);
          break;
      }

      handleEditorInput();
    },
    [handleEditorInput]
  );

  const handleCoverUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setCoverImage(ev.target.result);
    reader.readAsDataURL(file);
  };

  const removeCover = (e) => {
    e.stopPropagation();
    setCoverImage(null);
    if (coverInputRef.current) coverInputRef.current.value = "";
  };

  const handleSaveDraft = () => {
    const draftTitle = title.trim() || "Untitled";
    setSaving(true);

    setTimeout(() => {
      setSaving(false);
      showToast(`"${draftTitle}" saved as draft ✓`, "success");
    }, 600);
  };

  const handlePublish = () => {
    if (!title.trim()) {
      showToast("Please add a title before publishing.", "error");
      return;
    }

    if (!editorRef.current) {
      showToast("Please write some content before publishing.", "error");
      return;
    }

    const content = editorRef.current.innerText?.trim() || "";

    if (content.length < 10) {
      showToast("Please write some content before publishing.", "error");
      return;
    }

    if (!category) {
      showToast("Please select a category.", "error");
      return;
    }

    const blogData = {
      title: title.trim(),
      category,
      status,
      tags: tags.trim(),
      content,
      coverImage,
    };

    onPublish?.(blogData);

    showToast(`"${title.trim()}" published successfully! 🚀`, "success");

    setTimeout(() => {
      onBack();
    }, 1200);
  };

  const checklist = useMemo(
    () => [
      { key: "title", label: "Title", done: title.trim().length > 0 },
      { key: "category", label: "Category", done: !!category },
      { key: "content", label: "Content (10+ words)", done: wordCount >= 10 },
    ],
    [title, category, wordCount]
  );

  const readMinutes = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="editorWrap">
      <div className="editorHeader">
        <BackButton onClick={onBack} />
        <span className="headerDivider">|</span>
        <h2 className="sectionTitle">Write Your Blog</h2>
      </div>

      <div className="editorProgressBar">
        <div className="editorProgressChecks">
          {checklist.map((item) => (
            <span
              key={item.key}
              className={`editorProgressItem ${item.done ? "done" : ""}`}
            >
              <span className="editorProgressDot">
                {item.done && (
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>
              {item.label}
            </span>
          ))}
        </div>
        <span className="editorProgressReadTime">
          {wordCount === 0 ? "0 min read" : `${readMinutes} min read`}
        </span>
      </div>

      <div className="card manualEditorCard">
        <div
          className={`coverDropzone ${coverImage ? "hasCover" : ""}`}
          onClick={() => coverInputRef.current?.click()}
        >
          {coverImage ? (
            <>
              <img src={coverImage} alt="Cover" className="coverPreviewImg" />
              <button
                type="button"
                className="coverRemoveBtn"
                onClick={removeCover}
                title="Remove cover image"
              >
                ×
              </button>
            </>
          ) : (
            <div className="coverPlaceholder">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span>+ Add cover image</span>
            </div>
          )}
          <input
            ref={coverInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleCoverUpload}
          />
        </div>

        <div className="editorTitleSection">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog title..."
            className="titleInput"
          />
          <div className="metaGrid editorMetaGrid">
            <div>
              <label className="label">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="select"
              >
                <option value="">Select category</option>
                {TOPICS.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="select"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </div>
            <div>
              <label className="label">Tags</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="e.g. AI, Health, 2026"
                className="input"
              />
            </div>
          </div>
        </div>

        <div className="toolbar">
          {TOOLBAR_ACTIONS.map((action, index) => {
            if (action.divider) {
              return <div key={`divider-${index}`} className="toolbarDivider" />;
            }

            return (
              <button
                key={`${action.cmd}-${index}`}
                type="button"
                className={`toolbarBtn ${
                  action.cmd === "bold" ? "toolbarBold" : ""
                } ${action.cmd === "italic" ? "toolbarItalic" : ""} ${
                  action.cmd === "underline" ? "toolbarUnderline" : ""
                }`}
                onMouseDown={(e) => {
                  e.preventDefault();
                  execFormat(action.cmd);
                }}
                title={action.cmd}
              >
                {action.label}
              </button>
            );
          })}
          <div className="toolbarSpacer" />
          <span className="toolbarWordCount">
            {wordCount} {wordCount === 1 ? "word" : "words"}
          </span>
        </div>

        <div
          ref={editorRef}
          className="editorArea manualContentArea"
          contentEditable
          suppressContentEditableWarning
          onInput={handleEditorInput}
          data-placeholder="Start writing your blog here..."
        />
      </div>

      <div className="actionsRow">
        <span className="editorSaveStatus">
          {saving ? "Saving..." : "Auto-saved as draft"}
        </span>
        <div className="editorActions">
          <button type="button" onClick={handleSaveDraft} className="btnOutline">
            Save Draft
          </button>
          <button type="button" onClick={handlePublish} className="btnOrange">
            Publish Blog →
          </button>
        </div>
      </div>
    </div>
  );
}