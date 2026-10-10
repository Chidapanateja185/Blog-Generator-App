import { useState } from "react";
import { BackButton } from "../../ui/Button/Button";
import "./GeneratePanel.css";

export default function AIEditor({
  onBack,
  onGenerate,
  showToast,
  initialTitle = "",
}) {
  const [title, setTitle] = useState(initialTitle);
  const [category, setCategory] = useState("");
  const [tone, setTone] = useState("Informative");
  const [length, setLength] = useState("Medium");
  const [notes, setNotes] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  
  const trendingTopics = [
    "The Future of EVs in India",
    "Morning Habits for Productivity",
    "AI & Content Creation",
  ];

  const handleTrendingTopic = (topic) => {
    setTitle(topic);
  };

  
  const handleGenerate = async () => {
    if (!title.trim()) {
      showToast?.("Please enter a blog topic or title.", "error");
      return;
    }

    if (!category) {
      showToast?.("Please select a category.", "error");
      return;
    }

    try {
      setIsGenerating(true);

      const blogData = {
        title: title.trim(),
        category,
        tone,
        length,
        notes: notes.trim(),
      };


      if (onGenerate) {
        await onGenerate(blogData);
      }

    } catch (error) {
      console.error("AI blog generation failed:", error);

      showToast?.(
        "Something went wrong while generating the blog.",
        "error"
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="editorWrap">

    
      <div className="editorHeader">
        <BackButton onClick={onBack} />
        <span className="headerDivider">|</span>
        <h2 className="sectionTitle">
          Generate with AI
        </h2>
      </div>

      <div className="aiWrap">
        <div className="aiCard">
          <div className="aiDescription">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "5px 11px",
                marginBottom: "17px",
                borderRadius: "50px",
                background: "#f3eaff",
                color: "#8154c7",
                fontSize: "10px",
                fontWeight: "600",
              }}
            >
              ✨ AI-Assisted Drafting
            </span>
          </div>

          <div className="aiField">
            <label className="aiLabel">
              Try a Trending Topic
            </label>

            <div className="toneRow">
              {trendingTopics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  className={`tonePill ${
                    title === topic ? "active" : ""
                  }`}
                  onClick={() => handleTrendingTopic(topic)}
                >
                  {topic}
                </button>
              ))}

            </div>

          </div>


          <div className="aiField">
            <label
              htmlFor="ai-blog-title"
              className="aiLabel"
            >
              Blog Topic / Title
            </label>

            <input
              id="ai-blog-title"
              type="text"
              className="aiInput"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. The Future of Electric Vehicles in India"
            />

          </div>

          <div className="aiField">

            <label
              htmlFor="ai-category"
              className="aiLabel"
            >
              Category
            </label>

            <select
              id="ai-category"
              className="aiSelect"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >

              <option value="">
                Select a category
              </option>

              <option value="Technology">
                Technology
              </option>

              <option value="Artificial Intelligence">
                Artificial Intelligence
              </option>

              <option value="Business">
                Business
              </option>

              <option value="Productivity">
                Productivity
              </option>

              <option value="Lifestyle">
                Lifestyle
              </option>

              <option value="Education">
                Education
              </option>

              <option value="Health">
                Health
              </option>

              <option value="Finance">
                Finance
              </option>

              <option value="Travel">
                Travel
              </option>

              <option value="Other">
                Other
              </option>

            </select>

          </div>

          <div className="aiField">

            <label className="aiLabel">
              Tone
            </label>

            <div className="toneRow">

              {[
                "Informative",
                "Casual",
                "Professional",
                "Storytelling",
              ].map((item) => (

                <button
                  key={item}
                  type="button"
                  className={`tonePill ${
                    tone === item ? "active" : ""
                  }`}
                  onClick={() => setTone(item)}
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          <div className="aiField">
            <label className="aiLabel">
              Length
            </label>

            <div className="toneRow">

              <button
                type="button"
                className={`tonePill ${
                  length === "Short" ? "active" : ""
                }`}
                onClick={() => setLength("Short")}
              >
                Short (~300 words)
              </button>

              <button
                type="button"
                className={`tonePill ${
                  length === "Medium" ? "active" : ""
                }`}
                onClick={() => setLength("Medium")}
              >
                Medium (~600 words)
              </button>

              <button
                type="button"
                className={`tonePill ${
                  length === "Long" ? "active" : ""
                }`}
                onClick={() => setLength("Long")}
              >
                Long (~1000 words)
              </button>
            </div>
          </div>

          <div className="aiField">

            <label
              htmlFor="ai-notes"
              className="aiLabel"
            >
              Additional Notes (Optional)
            </label>

            <textarea
              id="ai-notes"
              className="aiTextarea"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any specific points, audience, or context..."
            />

          </div>

          <button
            type="button"
            className="aiGenerateBtn"
            onClick={handleGenerate}
            disabled={isGenerating}
          >

            {isGenerating ? (

              <span className="aiLoadingContent">
                <span>✨</span>
                Generating...
              </span>

            ) : (

              <>
                <span>ϟ</span>
                &nbsp;
                Generate Blog Post
              </>

            )}

          </button>
        </div>
      </div>
    </div>
  );
}