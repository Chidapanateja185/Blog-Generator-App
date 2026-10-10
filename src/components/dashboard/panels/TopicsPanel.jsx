import { useState } from "react";
import { TOPIC_META } from "../../../data/dashboardData";
import "./TopicPanel.css";


export default function TopicsPanel({showToast}) {
    
  const [subscribed, setSubscribed] = useState(new Set(["Technology", "Food"]));

  const toggle = name => {
    const next = new Set(subscribed);
    if (next.has(name)) { next.delete(name); showToast(`Unsubscribed from ${name}`, "success"); }
    else { next.add(name); showToast(`Subscribed to ${name}! 🎉`, "success"); }
    setSubscribed(next);
  };

   return (

    <>
      <p style={{ fontSize: 14, color: "#888", marginBottom: 20 }}>Click a topic to subscribe and get daily AI-generated blogs in your feed.</p>

      <div className="db-topics-grid">
        {TOPIC_META.map(t => (
          <div key={t.name} className={`db-topic-card ${subscribed.has(t.name) ? "active" : ""}`} onClick={() => toggle(t.name)}>
            <div className="db-topic-card-icon">{t.icon}</div>
            <div className="db-topic-card-name">{t.name}</div>
            <div className="db-topic-card-count">{t.count}</div>
            <div style={{ marginTop: 8, fontSize: 11, fontWeight: 600, color: subscribed.has(t.name) ? "#E84A0C" : "#AAA" }}>
              {subscribed.has(t.name) ? "✓ Subscribed" : "Subscribe"}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}