import { useState } from "react";
import {FOLLOWERS_DATA, FOLLOWING_DATA, SUGGESTIONS_DATA } from "../../../data/dashboardData";
import "./ProfilePanel.css";

function VisibilityBadge({ visibility }) {
  if (!visibility) return null;
  const isPublic = visibility === "public";
  return (
    <span className={`fw-visibility-badge ${isPublic ? "public" : "private"}`}>
      {isPublic ? "🌐 Public" : "🔒 Private"}
    </span>
  );
}


export default function FollowersTab({ followersCount, setFollowersCount, followingCount, setFollowingCount, showToast }) {
  
  const [fwTab, setFwTab] = useState("followers");
  const [followersList, setFollowersList] = useState(FOLLOWERS_DATA.map(f => ({ ...f })));
  const [followingList, setFollowingList] = useState(FOLLOWING_DATA.map(f => ({ ...f })));
  const [followSearch, setFollowSearch] = useState("");
  const [followingSearch, setFollowingSearch] = useState("");

  const toggleFollow = (id, type) => {
    if (type === "followers") {
      setFollowersList(prev =>
        prev.map(p => {
          if (p.id !== id) return p;
          const nowFollowing = !p.following;
          setFollowingCount(c => (nowFollowing ? c + 1 : c - 1));
          return { ...p, following: nowFollowing };
        })
      );
    } else {
      setFollowingList(prev =>
        prev.map(p => {
          if (p.id !== id) return p;
          const nowFollowing = !p.following;
          setFollowingCount(c => (nowFollowing ? c + 1 : c - 1));
          return { ...p, following: nowFollowing };
        })
      );
    }
  };

  const [suggestions, setSuggestions] = useState(SUGGESTIONS_DATA.map(s => ({ ...s, following: false })));
  const followSuggestion = id => {
    setSuggestions(prev => prev.map(s => s.id === id ? { ...s, following: true } : s));
    setFollowingCount(c => c + 1);
    showToast("You are now following this person!", "success");
  };

  const renderList = (list, type, search) => {
    const filtered = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.handle.toLowerCase().includes(search.toLowerCase()));
    if (!filtered.length) return <div className="fw-empty">No results found</div>;
    return filtered.map(p => (
      <div className="fw-person" key={p.id}>
        <div className="fw-avatar" style={{ background: p.color }}>{p.name.split(" ").map(n => n[0]).join("").slice(0,2)}</div>
        <div className="fw-info">
          <div className="fw-name">
            {p.name}{" "}
            {p.mutual && <span style={{ fontSize: 10, background: "#E8F5E9", color: "#2D6A2D", padding: "2px 7px", borderRadius: 50, fontWeight: 600, marginLeft: 4 }}>Mutual</span>}
          </div>
          <div className="fw-meta">{p.handle} · {p.topic}</div>
        </div>
        <button className={`fw-action-btn ${p.following ? "following" : ""}`} onClick={() => toggleFollow(p.id, type)}>
          {type === "following" ? (p.following ? "Following" : "Follow") : (p.following ? "Following" : "Follow Back")}
        </button>
      </div>
    ));
  };

  return (
    <div className="pf-tabs-content active pf-card" id="pf-tab-followers">
      <div className="pf-card-head"><h3>Followers &amp; Following</h3><p>People who follow you and people you follow</p></div>
      
      <div className="fw-tabs">
        <button className={`fw-tab ${fwTab === "followers" ? "active" : ""}`} onClick={() => setFwTab("followers")}>
          Followers <span style={{ background: "#FDE8E0", color: "#E84A0C", fontSize: 10, padding: "2px 7px", borderRadius: 50, marginLeft: 5 }}>{followersCount}</span>
        </button>
        <button className={`fw-tab ${fwTab === "following" ? "active" : ""}`} onClick={() => setFwTab("following")}>
          Following <span style={{ background: "#F5F5F5", color: "#888", fontSize: 10, padding: "2px 7px", borderRadius: 50, marginLeft: 5 }}>{followingCount}</span>
        </button>
        <button className={`fw-tab ${fwTab === "suggestions" ? "active" : ""}`} onClick={() => setFwTab("suggestions")}>Suggestions</button>
      </div>

      {fwTab === "followers" && (
        <div className="fw-tab-panel active">
          <div className="fw-search-wrap">
            <span className="fw-search-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
            <input type="text" placeholder="Search followers..." value={followSearch} onChange={e => setFollowSearch(e.target.value)}/>
          </div>
          {renderList(followersList, "followers", followSearch)}
        </div>
      )}
      {fwTab === "following" && (
        <div className="fw-tab-panel active">
          <div className="fw-search-wrap">
            <span className="fw-search-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
            <input type="text" placeholder="Search following..." value={followingSearch} onChange={e => setFollowingSearch(e.target.value)}/>
          </div>
          {renderList(followingList, "following", followingSearch)}
        </div>
      )}
      {fwTab === "suggestions" && (
        <div className="fw-tab-panel active">
          <p style={{ fontSize: 12, color: "#888", marginBottom: 14 }}>People you might want to follow based on your topics</p>
          {suggestions.map(p => (
            <div className="fw-person" key={p.id}>
              <div className="fw-avatar" style={{ background: p.color }}>{p.name.split(" ").map(n => n[0]).join("").slice(0,2)}</div>
              <div className="fw-info"><div className="fw-name">{p.name}</div><div className="fw-meta">{p.handle} · {p.bio}</div></div>
              <button className={`fw-action-btn ${p.following ? "following" : ""}`} onClick={() => followSuggestion(p.id)}>{p.following ? "Following" : "Follow"}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}