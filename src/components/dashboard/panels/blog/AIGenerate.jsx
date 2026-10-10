import { useState} from "react";
import {SAMPLE_AI_CONTENT, TONES, TOPICS, TOOLBAR_ACTIONS} from ".../../../src/data/dashboardData";

export default function AIGenerator({ onBack, onEditManually, showToast }) {
  const [topicInput, setTopicInput] = useState("");
  const [category, setCategory] = useState("");
  const [tone, setTone] = useState("Informative");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);

  const handleGenerate = () => {
    if (!topicInput.trim()) return showToast("Please enter a blog topic.", "error");
    if (!category) return showToast("Please select a category.", "error");
    setLoading(true);
    setOutput(null);
    setTimeout(() => {
      setLoading(false);
      setOutput({
        title: topicInput,
        category,
        tone,
        body: SAMPLE_AI_CONTENT,
      });
      showToast("Blog generated successfully! ✨", "success");
    }, 2000);
  };

  return (
    <div style={S.aiWrap}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <BackButton onClick={onBack} />
        <span style={{ color: "#E8E8E8" }}>|</span>
        <h2 style={S.sectionTitle}>Generate with AI</h2>
      </div>

      {/* Form card */}
      <div style={S.aiCard}>
        <p style={{ fontSize: 13, color: "#888", marginBottom: 22 }}>
          Fill in the details below and our AI will craft a complete blog post for you.
        </p>

        {/* Topic */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ ...S.label, fontSize: 11, letterSpacing: ".06em", color: "#6B6B6B" }}>
            Blog Topic / Title
          </label>
          <input
            value={topicInput}
            onChange={(e) => setTopicInput(e.target.value)}
            placeholder="e.g. The Future of Electric Vehicles in India"
            style={S.aiInput}
          />
        </div>

        {/* Category */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ ...S.label, fontSize: 11, letterSpacing: ".06em", color: "#6B6B6B" }}>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} style={S.aiSelect}>
            <option value="">Select a category</option>
            {TOPICS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>

        {/* Tone */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ ...S.label, fontSize: 11, letterSpacing: ".06em", color: "#6B6B6B" }}>Tone</label>
          <div style={S.toneRow}>
            {TONES.map((t) => (
              <button key={t} onClick={() => setTone(t)} style={S.tonePill(tone === t)}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div style={{ marginBottom: 24 }}>
          <label style={{ ...S.label, fontSize: 11, letterSpacing: ".06em", color: "#6B6B6B" }}>
            Additional Notes <span style={{ textTransform: "none", fontWeight: 400 }}>(optional)</span>
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any specific points, audience, or context you'd like the blog to cover..."
            style={S.aiTextarea}
          />
        </div>

        {/* Generate button */}
        <button
          onClick={handleGenerate}
          disabled={loading}
          style={{ ...S.btnOrange, width: "100%", padding: 14, borderRadius: 10, fontSize: 14, opacity: loading ? 0.7 : 1 }}
        >
          {loading ? (
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <Spinner /> Generating...
            </span>
          ) : (
            "✨ Generate Blog Post"
          )}
        </button>
      </div>

      {/* Output card */}
      {output && (
        <div style={S.outputCard}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18, gap: 12, flexWrap: "wrap" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#111", margin: 0, flex: 1 }}>
              {output.title}
            </h3>
            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              <button style={S.btnSmOutline} onClick={() => showToast("Saved as draft!", "success")}>
                Save Draft
              </button>
              <button style={S.btnSmOrange} onClick={() => onEditManually(output)}>
                Edit Manually →
              </button>
              <button style={S.btnGreen} onClick={() => showToast("Blog published! 🚀", "success")}>
                Publish
              </button>
            </div>
          </div>

          {/* Meta pills */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            <span style={{ fontSize: 11, background: "#FDE8E0", color: "#E84A0C", padding: "3px 10px", borderRadius: 50, fontWeight: 600 }}>
              {output.category}
            </span>
            <span style={{ fontSize: 11, background: "#F0F0F0", color: "#666", padding: "3px 10px", borderRadius: 50 }}>
              {output.tone}
            </span>
            <span style={{ fontSize: 11, background: "#F0F0F0", color: "#666", padding: "3px 10px", borderRadius: 50 }}>
              ✨ AI Generated
            </span>
          </div>

          <div
            style={{ fontSize: 14, color: "#333", lineHeight: 1.9 }}
            dangerouslySetInnerHTML={{ __html: output.body }}
          />
        </div>
      )}
    </div>
  );
}
