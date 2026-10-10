import { useState } from "react";
import PageHeader from "../../common/PageHeader";
import {QuickStartRow} from "../../common/PageHeader";
import {modes} from "../../../data/dashboardData";
import BotdBanner from "../../common/BotdBanner";
import DraftsAndTips from "./DraftsAndTips";
import "./GeneratePanel.css";

export default function ModeSelector({ onSelect, onViewAllDrafts, onContinueDraft }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="modeSelector">
      <BotdBanner
        blog={{
          title: "10 AI Tools Every Developer Should Try in 2026",
          author: "Sarah Chen",
          category: "Technology",
          excerpt:
            "A curated look at the AI-powered tools reshaping how developers write, debug, and ship code.",
        }}
        onView={() => onSelect("ai")}
      />
      <PageHeader
        title="Create a New Blog"
        subtitle="How would you like to write today?"
      />
      <QuickStartRow onSelect={onSelect} />

      <div className="modeGrid">
        {modes.map((item) => (
          <div
            key={item.key}
            className={`modeCard ${item.primary ? "primary" : ""} ${
              hovered === item.key ? "hovered" : ""
            }`}
            onClick={() => onSelect(item.key)}
            onMouseEnter={() => setHovered(item.key)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`modeIconBox ${item.primary ? "primary" : ""}`}
            >
              {item.icon}
            </div>

            <div className="modeCardTitle">
              <h3>{item.title}</h3>

              <span
                className={`modeBadge ${
                  item.primary ? "primary" : ""
                }`}
              >
                {item.badge}
              </span>
            </div>

            <p className="modeCardDescription">
              {item.desc}
            </p>

            <span
              className={`modeCardCta ${
                item.primary ? "primary" : ""
              }`}
            >
              {item.cta}
            </span>
          </div>
        ))}
      </div>
      <DraftsAndTips
        onViewAllDrafts={onViewAllDrafts}
        onContinueDraft={(draft) => onContinueDraft?.(draft)}
        onStartDraft={() => onSelect("manual")}
      />
    </div>
  );
}