import { useState } from "react";
import {FEED_DATA, SUGGESTIONS_DATA} from "../../../data/dashboardData";
import "./CommunityPanel.css";

export default function CommunityPanel({followersCount, followingCount, showToast}) {
  
    const [feed, setFeed] = useState(FEED_DATA.map(f => ({ ...f })));
    const toggleLike = i => {
        const next = [...feed];
        next[i] = { ...next[i], liked: !next[i].liked, likes: next[i].liked ? next[i].likes - 1 : next[i].likes + 1 };
        setFeed(next);
    };

    const [following, setFollowing] = useState(new Set());
    const followPerson = id => {
        setFollowing(prev => { const n = new Set(prev); n.add(id); return n; });
        showToast("Following! Their blogs will appear in your feed.", "success");
    };

    return (
        <div className="cm-root">
        <div>
            <div className="cm-card">
            <div className="cm-card-head"><h3>Following Feed</h3><span style={{ fontSize: 12, color: "#888" }}>Blogs from people you follow</span></div>
            {feed.map((f, i) => (
                <div className="cm-feed-item" key={i}>
                <div className="cm-feed-header">
                    <div className="cm-feed-avatar" style={{ background: f.color }}>{f.person.split(" ").map(n => n[0]).join("").slice(0,2)}</div>
                    <div>
                    <div className="cm-feed-name">{f.person} <span style={{ color: "#AAA", fontWeight: 400 }}>{f.handle}</span></div>
                    <div className="cm-feed-time">{f.time}</div>
                    </div>
                </div>
                <div className="cm-feed-title">{f.title}</div>
                <div className="cm-feed-excerpt">{f.excerpt}</div>
                <div className="cm-feed-actions">
                    <button className={`cm-feed-action ${f.liked ? "liked" : ""}`} onClick={() => toggleLike(i)}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill={f.liked ? "#E84A0C" : "none"} stroke={f.liked ? "#E84A0C" : "currentColor"} strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                    </svg>
                    {f.likes}
                    </button>
                    <button className="cm-feed-action">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                    {f.comments}
                    </button>
                    <button className="cm-feed-action" style={{ marginLeft: "auto" }}>Read more →</button>
                </div>
                </div>
            ))}
            </div>
        </div>
        <div>
            <div className="cm-card">
            <div className="cm-card-head"><h3>Suggested Writers</h3></div>
            <div className="cm-suggest-grid">
                {SUGGESTIONS_DATA.slice(0, 4).map(p => (
                <div className="fw-person" key={p.id}>
                    <div className="fw-avatar" style={{ background: p.color, width: 36, height: 36, fontSize: 12 }}>{p.name.split(" ").map(n => n[0]).join("").slice(0,2)}</div>
                    <div className="fw-info"><div className="fw-name" style={{ fontSize: 13 }}>{p.name}</div><div className="fw-meta">{p.topic}</div></div>
                    <button className={`fw-action-btn ${following.has(p.id) ? "following" : ""}`} style={{ fontSize: 11, padding: "5px 11px" }} onClick={() => followPerson(p.id)}>
                    {following.has(p.id) ? "Following" : "Follow"}
                    </button>
                </div>
                ))}
            </div>
            </div>
            <div className="cm-card">
            <div className="cm-card-head"><h3>Your Stats</h3></div>
            <div style={{ padding: "16px 20px" }}>
                {[["Followers", followersCount], ["Following", followingCount], ["Total blog views", "2.4k"]].map(([label, val]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid #F5F5F5", fontSize: 13 }}>
                    <span style={{ color: "#888" }}>{label}</span><strong>{val}</strong>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
}