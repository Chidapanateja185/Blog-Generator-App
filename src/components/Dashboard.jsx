import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";

/* ─── Data ───────────────────────────────────────────────────── */
const TOPIC_META = [
  { name: "Technology",      icon: "💻", count: "1,240 blogs" },
  { name: "Health & Wellness",icon: "🏥", count: "980 blogs"  },
  { name: "Finance",         icon: "💰", count: "870 blogs"   },
  { name: "Travel",          icon: "✈️", count: "1,100 blogs" },
  { name: "Food",            icon: "🍜", count: "760 blogs"   },
  { name: "Science",         icon: "🔬", count: "640 blogs"   },
  { name: "Lifestyle",       icon: "🌿", count: "920 blogs"   },
  { name: "Business",        icon: "📊", count: "1,050 blogs" },
];

const RECENT_BLOGS = [
  { title: "How AI is Reshaping Modern Healthcare",      topic: "Health",     date: "Apr 28, 2026", status: "published", views: 342 },
  { title: "10 Finance Tips Every Developer Should Know",topic: "Finance",    date: "Apr 22, 2026", status: "published", views: 218 },
  { title: "The Future of Travel in a Post-AI World",   topic: "Travel",     date: "Apr 15, 2026", status: "draft",     views: null },
  { title: "Top 5 Street Food Spots in Chennai",        topic: "Food",       date: "Apr 10, 2026", status: "published", views: 567 },
  { title: "Understanding Blockchain for Beginners",    topic: "Technology", date: "Mar 30, 2026", status: "published", views: 430 },
  { title: "Morning Routines of Top Entrepreneurs",     topic: "Lifestyle",  date: "Mar 20, 2026", status: "draft",     views: null },
];

const FOLLOWERS_DATA = [
  { id: 1, name: "Aisha Patel",     handle: "@aishawrites", topic: "Technology", mutual: true,  following: false, color: "#7C3AED" },
  { id: 2, name: "Ravi Shankar",    handle: "@raviblog",    topic: "Finance",    mutual: false, following: true,  color: "#0284C7" },
  { id: 3, name: "Meera Nair",      handle: "@meerastories",topic: "Travel",     mutual: true,  following: true,  color: "#059669" },
  { id: 4, name: "Carlos Diaz",     handle: "@carlostech",  topic: "Technology", mutual: false, following: false, color: "#D97706" },
  { id: 5, name: "Priya Singh",     handle: "@priyaeats",   topic: "Food",       mutual: true,  following: true,  color: "#DB2777" },
  { id: 6, name: "Liam Chen",       handle: "@liamscience", topic: "Science",    mutual: false, following: false, color: "#0891B2" },
  { id: 7, name: "Fatima Al-Zahra", handle: "@fatimawrites",topic: "Lifestyle",  mutual: true,  following: false, color: "#E84A0C" },
  { id: 8, name: "David Kim",       handle: "@davidbiz",    topic: "Business",   mutual: false, following: true,  color: "#DC2626" },
];

const FOLLOWING_DATA = [
  { id: 9,  name: "Anjali Mehta",    handle: "@anjalihealth",     topic: "Health & Wellness", following: true, color: "#059669" },
  { id: 10, name: "Sam Wilson",      handle: "@samfinance",       topic: "Finance",           following: true, color: "#0284C7" },
  { id: 11, name: "Nithya Krishnan", handle: "@nithyatech",      topic: "Technology",        following: true, color: "#7C3AED" },
  { id: 12, name: "Omar Farouq",     handle: "@omartravels",     topic: "Travel",            following: true, color: "#D97706" },
  { id: 13, name: "Lakshmi Devi",    handle: "@lakshmilifestyle", topic: "Lifestyle",         following: true, color: "#DB2777" },
  { id: 14, name: "Alex Thompson",   handle: "@alexscience",     topic: "Science",           following: true, color: "#0891B2" },
];

const SUGGESTIONS_DATA = [
  { id: 15, name: "Vikram Iyer",   handle: "@vikramtech",   topic: "Technology", bio: "Senior dev writing about AI and open source",    color: "#7C3AED" },
  { id: 16, name: "Sarah Johnson", handle: "@sarahfoods",   topic: "Food",       bio: "Food blogger exploring street cuisine worldwide", color: "#E84A0C" },
  { id: 17, name: "Karthik Rajan", handle: "@karthikfinance",topic: "Finance",   bio: "CFP sharing practical personal finance tips",    color: "#059669" },
  { id: 18, name: "Elena Vasquez", handle: "@elenatravels", topic: "Travel",     bio: "Solo traveller, 40+ countries and counting",     color: "#0284C7" },
  { id: 19, name: "Aman Gupta",    handle: "@amanbiz",      topic: "Business",   bio: "Startup founder writing about entrepreneurship", color: "#D97706" },
];

const FEED_DATA = [
  { person: "Anjali Mehta",    handle: "@anjalihealth", color: "#059669", time: "2h ago",  title: "5 Morning Habits That Changed My Life",         excerpt: "Starting your day with intention can transform everything from your energy levels to your productivity...", likes: 42,  comments: 8,  liked: false },
  { person: "Sam Wilson",      handle: "@samfinance",   color: "#0284C7", time: "4h ago",  title: "Why Index Funds Beat Most Active Managers",     excerpt: "The data is clear — over a 20-year period, passive investing consistently outperforms active funds...",    likes: 87,  comments: 14, liked: true  },
  { person: "Nithya Krishnan", handle: "@nithyatech",   color: "#7C3AED", time: "1d ago",  title: "Building a RAG Pipeline in Under 100 Lines",    excerpt: "Retrieval-augmented generation doesn't have to be complicated. Here's a simple Python implementation...",   likes: 134, comments: 22, liked: false },
  { person: "Omar Farouq",     handle: "@omartravels",  color: "#D97706", time: "2d ago",  title: "Hidden Gems of Rajasthan You Must Visit",       excerpt: "Beyond the usual tourist trail, Rajasthan hides some of the most breathtaking forts and villages...",      likes: 61,  comments: 9,  liked: false },
];

const SAMPLE_BLOGS = {
  Technology: `<p><strong>Introduction</strong><br/>The world of technology moves fast. From AI to quantum computing, innovation never sleeps.</p><p style={{marginTop:'14px'}}><strong>Key Trends</strong><br/>Electric vehicles, large language models, and edge computing are reshaping industries across the globe in 2026.</p><p style={{marginTop:'14px'}}><strong>What This Means for You</strong><br/>Staying informed is no longer optional — it is a competitive advantage. Subscribe to our daily tech digest to stay ahead.</p>`,
  default:    `<p><strong>Introduction</strong><br/>In today's fast-changing world, understanding this topic has never been more important.</p><p style={{marginTop:'14px'}}><strong>Deep Dive</strong><br/>Our AI has curated the most relevant insights from thousands of sources to bring you this comprehensive overview.</p><p style={{marginTop:'14px'}}><strong>Takeaways</strong><br/>Whether you're a beginner or an expert, there's always something new to learn. Bookmark this post and share it.</p>`,
};

/* ─── Toast ──────────────────────────────────────────────────── */
function Toast({ toast }) {
  if (!toast) return null;
  return (
    <div
      style={{
        position: "fixed", top: 24, left: "50%", transform: "translateX(-50%)",
        padding: "12px 28px", borderRadius: 50, fontSize: 14, fontWeight: 600,
        zIndex: 999, whiteSpace: "nowrap", boxShadow: "0 8px 32px rgba(0,0,0,.12)",
        background: toast.type === "success" ? "#EBF2ED" : "#FDE8E0",
        color: toast.type === "success" ? "#2D5A3D" : "#C0392B",
        animation: "slideDown .3s ease",
      }}
    >
      {toast.type === "success" ? "✅" : "❌"} {toast.msg}
    </div>
  );
}

/* ─── Sidebar ────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { id: "overview",  label: "Overview",      section: "Main",    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg> },
  { id: "myblogs",   label: "My Blogs",      section: null,      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { id: "generate",  label: "Generate Blog", section: null,      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { id: "topics",    label: "Topics",        section: null,      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg> },
  { id: "community", label: "Community",     section: null,      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
  { id: "profile",   label: "Profile",       section: "Account", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { id: "settings",  label: "Settings",      section: null,      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg> },
];

function Sidebar({ user, activePanel, onSwitch, onLogout }) {
  const initials = user ? (user.fname[0] + (user.lname?.[0] || user.fname[1] || "")).toUpperCase() : "?";
  let lastSection = null;
  return (
    <aside className="db-sidebar">
      <div className="db-sidebar-logo">
        <div className="db-sidebar-logo-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="db-sidebar-logo-text">Blog<span>Creft</span></span>
      </div>
      <div className="db-nav">
        {NAV_ITEMS.map(item => {
          const showSection = item.section && item.section !== lastSection;
          if (item.section) lastSection = item.section;
          return (
            <div key={item.id}>
              {showSection && <div className="db-nav-section">{item.section}</div>}
              <button
                className={`db-nav-item ${activePanel === item.id ? "active" : ""}`}
                onClick={() => onSwitch(item.id)}
              >
                {item.icon}
                {item.label}
              </button>
            </div>
          );
        })}
      </div>
      <div className="db-sidebar-footer">
        <div className="db-user-row" onClick={() => onSwitch("profile")} title="View Profile">
          <div className="db-avatar">{initials}</div>
          <div>
            <div className="db-user-name">{user ? `${user.fname}${user.lname ? " " + user.lname : ""}` : ""}</div>
            <div className="db-user-email">{user?.email}</div>
          </div>
        </div>
        <button className="db-logout-btn" onClick={onLogout}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Sign out
        </button>
      </div>
    </aside>
  );
}

/* ─── Overview Panel ─────────────────────────────────────────── */
function OverviewPanel({ onSwitch }) {
  return (
    <>
      <div className="db-stats">
        {[
          { label: "Total Blogs",        value: "12",   change: "↑ 3 this month",      dir: "up" },
          { label: "Total Views",        value: "2.4k", change: "↑ 18% vs last month", dir: "up" },
          { label: "Subscribed Topics",  value: "4",    change: "↑ 1 new",             dir: "up" },
          { label: "Drafts",             value: "3",    change: "2 need review",        dir: "down" },
        ].map(s => (
          <div className="db-stat" key={s.label}>
            <div className="db-stat-label">{s.label}</div>
            <div className="db-stat-value">{s.value}</div>
            <div className={`db-stat-change ${s.dir}`}>{s.change}</div>
          </div>
        ))}
      </div>
      <div className="db-actions">
        {[
          { icon: "⚡", bg: "#FDE8E0", title: "Generate Blog",  desc: "Create a new AI-powered blog post instantly", panel: "generate" },
          { icon: "📄", bg: "#E8F4FE", title: "My Blogs",       desc: "View, edit and manage all your posts",        panel: "myblogs"  },
          { icon: "🌐", bg: "#E8F5E9", title: "Browse Topics",  desc: "Explore and subscribe to new categories",     panel: "topics"   },
        ].map(a => (
          <div className="db-action-card" key={a.title} onClick={() => onSwitch(a.panel)}>
            <div className="db-action-icon" style={{ background: a.bg }}>{a.icon}</div>
            <div className="db-action-title">{a.title}</div>
            <div className="db-action-desc">{a.desc}</div>
          </div>
        ))}
      </div>
      <div className="db-section-header">
        <span className="db-section-title">Recent Blogs</span>
        <button className="db-view-all" onClick={() => onSwitch("myblogs")}>View all →</button>
      </div>
      <div className="db-table-wrap">
        <table className="db-table">
          <thead>
            <tr><th>Title</th><th>Topic</th><th>Date</th><th>Status</th><th>Views</th></tr>
          </thead>
          <tbody>
            {RECENT_BLOGS.slice(0, 4).map((b, i) => (
              <tr key={i}>
                <td>{b.title}</td>
                <td><span className="db-topic-badge">{b.topic}</span></td>
                <td>{b.date}</td>
                <td><span className={`db-status-badge ${b.status}`}>{b.status === "published" ? "Published" : "Draft"}</span></td>
                <td>{b.views ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* ─── My Blogs Panel ─────────────────────────────────────────── */
function MyBlogsPanel({ showToast }) {
  return (
    <div className="db-table-wrap">
      <table className="db-table">
        <thead>
          <tr><th>Title</th><th>Topic</th><th>Date</th><th>Status</th><th>Views</th><th>Action</th></tr>
        </thead>
        <tbody>
          {RECENT_BLOGS.map((b, i) => (
            <tr key={i}>
              <td>{b.title}</td>
              <td><span className="db-topic-badge">{b.topic}</span></td>
              <td>{b.date}</td>
              <td><span className={`db-status-badge ${b.status}`}>{b.status === "published" ? "Published" : "Draft"}</span></td>
              <td>{b.views ?? "—"}</td>
              <td><button className="db-view-all" style={{ fontSize: 12 }} onClick={() => showToast("Opening editor...", "success")}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Generate Panel ─────────────────────────────────────────── */
function GeneratePanel({ showToast }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tone, setTone] = useState("Informative");
  const [notes, setNotes] = useState("");
  const [output, setOutput] = useState(null);

  const handleGenerate = () => {
    if (!title.trim()) return showToast("Please enter a blog topic.", "error");
    if (!category) return showToast("Please select a category.", "error");
    setOutput({ title, body: SAMPLE_BLOGS[category] || SAMPLE_BLOGS.default });
    showToast("Blog generated! ✨", "success");
  };

  return (
    <>
      <div className="gen-card">
        <h3>Generate a Blog with AI</h3>
        <p className="gen-card-subtitle">Fill in the details below and our AI will craft a complete blog post for you.</p>
        <div className="gen-field">
          <label className="gen-label">Blog Topic / Title</label>
          <input className="gen-input" placeholder="e.g. The Future of Electric Vehicles in India" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="gen-field">
          <label className="gen-label">Category</label>
          <select className="gen-select" value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">Select a category</option>
            {TOPIC_META.map(t => <option key={t.name}>{t.name}</option>)}
          </select>
        </div>
        <div className="gen-field">
          <label className="gen-label">Tone</label>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["Informative","Casual","Professional","Storytelling"].map(t => (
              <button key={t} className={`topic-pill ${tone === t ? "active" : ""}`} onClick={() => setTone(t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="gen-field" style={{ marginBottom: 24 }}>
          <label className="gen-label">Additional Notes (optional)</label>
          <textarea className="gen-textarea" placeholder="Any specific points, audience, or context..." value={notes} onChange={e => setNotes(e.target.value)}/>
        </div>
        <button className="btn-orange" style={{ width: "100%", padding: "14px", borderRadius: 10, fontSize: 14 }} onClick={handleGenerate}>
          ⚡ Generate Blog Post
        </button>
      </div>
      {output && (
        <div className="gen-card" style={{ marginTop: 20 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
            <h3 style={{ fontSize: 18 }}>{output.title}</h3>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn-outline" style={{ fontSize: 12, padding: "7px 16px" }} onClick={() => showToast("Saved as draft!", "success")}>Save Draft</button>
              <button className="btn-orange" style={{ fontSize: 12, padding: "7px 16px", borderRadius: 50 }} onClick={() => showToast("Published! 🎉", "success")}>Publish</button>
            </div>
          </div>
          <div style={{ fontSize: 14, color: "#333", lineHeight: 1.9 }} dangerouslySetInnerHTML={{ __html: output.body }}/>
        </div>
      )}
    </>
  );
}

/* ─── Topics Panel ───────────────────────────────────────────── */
function TopicsPanel({ showToast }) {
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

/* ─── Community Panel ────────────────────────────────────────── */
function CommunityPanel({ followersCount, followingCount, showToast }) {
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

/* ─── Profile Panel ──────────────────────────────────────────── */
const PROFILE_TABS = [
  { id: "info",          label: "Personal Info",   icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { id: "notifications", label: "Notifications",   icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg> },
  { id: "activity",      label: "Activity",        icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { id: "followers",     label: "Followers",       icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
  { id: "danger",        label: "Danger Zone",     icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
];

function FollowersTab({ followersCount, setFollowersCount, followingCount, setFollowingCount, showToast }) {
  const [fwTab, setFwTab] = useState("followers");
  const [followersList, setFollowersList] = useState(FOLLOWERS_DATA.map(f => ({ ...f })));
  const [followingList, setFollowingList] = useState(FOLLOWING_DATA.map(f => ({ ...f })));
  const [followSearch, setFollowSearch] = useState("");
  const [followingSearch, setFollowingSearch] = useState("");

  const toggleFollow = (id, type) => {
    if (type === "followers") {
      setFollowersList(prev => prev.map(p => p.id === id ? { ...p, following: !p.following } : p));
      setFollowingCount(c => followersCount); // keeps count in sync
    } else {
      setFollowingList(prev => prev.map(p => p.id === id ? { ...p, following: !p.following } : p));
      setFollowingCount(c => c - 1);
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
            <span className="fw-search-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
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

function ProfilePanel({ user, setUser, showToast, followersCount, setFollowersCount, followingCount, setFollowingCount }) {
  const [activeTab, setActiveTab] = useState("info");
  const [form, setForm] = useState({ fname: user?.fname || "", lname: user?.lname || "", mobile: "", location: "", bio: "", website: "", twitter: "", linkedin: "" });
  const [avatarSrc, setAvatarSrc] = useState(null);
  const [notifs, setNotifs] = useState({ digest: true, generated: true, weekly: false, features: true, promo: false, push: false });

  const initials = (form.fname[0] + (form.lname?.[0] || form.fname[1] || "")).toUpperCase();

  const saveInfo = () => {
    if (!form.fname.trim()) return showToast("First name is required.", "error");
    setUser(prev => ({ ...prev, fname: form.fname, lname: form.lname }));
    showToast("Profile updated successfully!", "success");
  };

  const handleAvatar = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => { setAvatarSrc(ev.target.result); showToast("Profile photo updated!", "success"); };
    reader.readAsDataURL(file);
  };

  const ACTIVITIES = [
    { icon: "⚡", bg: "#FDE8E0", text: <>Generated blog: <strong>"How AI is Reshaping Modern Healthcare"</strong></>, time: "2 hrs ago" },
    { icon: "📄", bg: "#E8F4FE", text: <>Published post: <strong>"Top 5 Street Food Spots in Chennai"</strong></>,       time: "1 day ago" },
    { icon: "🌐", bg: "#E8F5E9", text: <>Subscribed to topic: <strong>Technology</strong></>,                            time: "3 days ago" },
    { icon: "⚡", bg: "#FDE8E0", text: <>Generated blog: <strong>"10 Finance Tips Every Developer Should Know"</strong></>, time: "5 days ago" },
    { icon: "🔑", bg: "#F5F0FF", text: <>Signed in from <strong>Chennai, India</strong> · Chrome on macOS</>,           time: "5 days ago" },
    { icon: "✅", bg: "#E8F5E9", text: <>Account created and email verified</>,                                          time: "May 1, 2026" },
  ];

  const fullName = `${form.fname}${form.lname ? " " + form.lname : ""}`;

  return (
    <div className="pf-root">
      {/* Left sidebar */}
      <div>
        <div className="pf-card">
          <div className="pf-avatar-wrap">
            <div className="pf-avatar-lg" onClick={() => document.getElementById("pf-file-input").click()}>
              {avatarSrc ? <img src={avatarSrc} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} alt="avatar"/> : initials}
              <div className="pf-avatar-overlay">📷</div>
            </div>
            <input type="file" id="pf-file-input" accept="image/*" style={{ display: "none" }} onChange={handleAvatar}/>
            <div className="pf-user-name-lg">{fullName}</div>
            <div className="pf-user-email-lg">{user?.email}</div>
            <span className="pf-member-badge">Member since May 2026</span>
          </div>
          <div className="pf-stats-row">
            <div className="pf-stat-cell" onClick={() => setActiveTab("followers")}>
              <div className="pf-stat-cell-val">{followersCount}</div>
              <div className="pf-stat-cell-lbl">Followers</div>
            </div>
            <div className="pf-stat-cell" onClick={() => setActiveTab("followers")}>
              <div className="pf-stat-cell-val">{followingCount}</div>
              <div className="pf-stat-cell-lbl">Following</div>
            </div>
            <div className="pf-stat-cell">
              <div className="pf-stat-cell-val">12</div>
              <div className="pf-stat-cell-lbl">Blogs</div>
            </div>
          </div>
          <div className="pf-sidebar-nav">
            {PROFILE_TABS.map(t => (
              <button key={t.id} className={`pf-sidebar-item ${activeTab === t.id ? "active" : ""}`} onClick={() => setActiveTab(t.id)}>
                {t.icon}{t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right content */}
      <div>
        {/* Personal Info */}
        {activeTab === "info" && (
          <div className="pf-tabs-content active pf-card">
            <div className="pf-card-head"><h3>Personal Information</h3><p>Update your name, bio and contact details</p></div>
            <div className="pf-card-body">
              <div className="pf-row">
                <div className="pf-field"><label className="pf-label">First Name</label><input className="pf-input" value={form.fname} onChange={e => setForm({...form, fname: e.target.value})} placeholder="John"/></div>
                <div className="pf-field"><label className="pf-label">Last Name</label><input className="pf-input" value={form.lname} onChange={e => setForm({...form, lname: e.target.value})} placeholder="Doe"/></div>
              </div>
              <div className="pf-field"><label className="pf-label">Email Address</label><input className="pf-input" value={user?.email} readOnly/><p className="pf-hint">Email cannot be changed. Contact support if needed.</p></div>
              <div className="pf-field"><label className="pf-label">Mobile Number</label><input className="pf-input" value={form.mobile} onChange={e => setForm({...form, mobile: e.target.value})} placeholder="+91 98765 43210"/></div>
              <div className="pf-field"><label className="pf-label">Location</label><input className="pf-input" value={form.location} onChange={e => setForm({...form, location: e.target.value})} placeholder="e.g. Chennai, Tamil Nadu"/></div>
              <div className="pf-field"><label className="pf-label">Bio</label><textarea className="pf-input" value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} rows="3" placeholder="Tell readers a bit about yourself..." style={{ resize: "vertical" }}/></div>
              <div className="pf-field"><label className="pf-label">Website / Portfolio</label><input className="pf-input" value={form.website} onChange={e => setForm({...form, website: e.target.value})} type="url" placeholder="https://yoursite.com"/></div>
              <hr className="pf-divider"/>
              <p className="pf-section-label">Social Links</p>
              <div className="pf-row">
                <div className="pf-field"><label className="pf-label">Twitter / X</label><input className="pf-input" value={form.twitter} onChange={e => setForm({...form, twitter: e.target.value})} placeholder="@username"/></div>
                <div className="pf-field"><label className="pf-label">LinkedIn</label><input className="pf-input" value={form.linkedin} onChange={e => setForm({...form, linkedin: e.target.value})} placeholder="linkedin.com/in/..."/></div>
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
                <button className="btn-orange" style={{ fontSize: 13, padding: "10px 24px", borderRadius: 10 }} onClick={saveInfo}>Save Changes</button>
                <button className="btn-outline" style={{ fontSize: 13, padding: "10px 24px" }} onClick={() => setForm({ fname: user?.fname || "", lname: user?.lname || "", mobile: "", location: "", bio: "", website: "", twitter: "", linkedin: "" })}>Reset</button>
              </div>
            </div>
          </div>
        )}

        {/* Notifications */}
        {activeTab === "notifications" && (
          <div className="pf-tabs-content active pf-card">
            <div className="pf-card-head"><h3>Notification Preferences</h3><p>Control what emails and alerts you receive</p></div>
            <div className="pf-card-body">
              <p className="pf-section-label">Email Notifications</p>
              {[
                { key: "digest",    title: "Daily blog digest",         desc: "Receive your subscribed topic blogs every morning" },
                { key: "generated", title: "Blog generation complete",  desc: "Notify when your AI-generated blog is ready" },
                { key: "weekly",    title: "Weekly analytics report",   desc: "Summary of your blog views and engagement" },
                { key: "features",  title: "New feature announcements", desc: "Be the first to know about BlogCraft updates" },
                { key: "promo",     title: "Promotional emails",        desc: "Offers, discounts and special campaigns" },
              ].map(n => (
                <div className="pf-toggle-row" key={n.key}>
                  <div className="pf-toggle-info"><div className="pf-toggle-title">{n.title}</div><div className="pf-toggle-desc">{n.desc}</div></div>
                  <button className={`pf-toggle ${notifs[n.key] ? "on" : ""}`} onClick={() => setNotifs(prev => ({ ...prev, [n.key]: !prev[n.key] }))}/>
                </div>
              ))}
              <hr className="pf-divider"/>
              <p className="pf-section-label">In-App Alerts</p>
              <div className="pf-toggle-row">
                <div className="pf-toggle-info"><div className="pf-toggle-title">Browser push notifications</div><div className="pf-toggle-desc">Get alerts even when the tab is in the background</div></div>
                <button className={`pf-toggle ${notifs.push ? "on" : ""}`} onClick={() => setNotifs(prev => ({ ...prev, push: !prev.push }))}/>
              </div>
              <div style={{ marginTop: 20 }}>
                <button className="btn-orange" style={{ fontSize: 13, padding: "10px 24px", borderRadius: 10 }} onClick={() => showToast("Notification preferences saved!", "success")}>Save Preferences</button>
              </div>
            </div>
          </div>
        )}

        {/* Activity */}
        {activeTab === "activity" && (
          <div className="pf-tabs-content active pf-card">
            <div className="pf-card-head"><h3>Recent Activity</h3><p>Your last actions on BlogCraft</p></div>
            <div className="pf-card-body">
              {ACTIVITIES.map((a, i) => (
                <div className="pf-activity-item" key={i}>
                  <div className="pf-activity-dot" style={{ background: a.bg }}>{a.icon}</div>
                  <div className="pf-activity-text">{a.text}</div>
                  <div className="pf-activity-time">{a.time}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Followers */}
        {activeTab === "followers" && (
          <FollowersTab
            followersCount={followersCount} setFollowersCount={setFollowersCount}
            followingCount={followingCount} setFollowingCount={setFollowingCount}
            showToast={showToast}
          />
        )}

        {/* Danger Zone */}
        {activeTab === "danger" && (
          <div className="pf-tabs-content active pf-card">
            <div className="pf-card-head"><h3>Danger Zone</h3><p>Irreversible actions — proceed with caution</p></div>
            <div className="pf-card-body">
              {[
                { title: "Export my data",            desc: "Download all your blogs, settings and account data as a ZIP file",              btn: "Export Data",    cb: () => showToast("Preparing your data export...", "success"), red: false },
                { title: "Deactivate account",        desc: "Temporarily hide your profile and pause all email digests",                     btn: "Deactivate",     cb: () => showToast("Account deactivated. Sign in anytime to reactivate.", "success"), red: false },
                { title: "Delete account permanently",desc: "All your blogs, data and subscriptions will be deleted forever. This cannot be undone.", btn: "Delete Account", cb: () => { if (window.confirm("Are you sure? This cannot be undone.")) showToast("Account deleted.", "success"); }, red: true },
              ].map(d => (
                <div className="pf-danger-item" key={d.title}>
                  <div><div className="pf-danger-title">{d.title}</div><div className="pf-danger-desc">{d.desc}</div></div>
                  <button className={`pf-danger-btn ${d.red ? "red" : ""}`} onClick={d.cb}>{d.btn}</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Settings Panel ─────────────────────────────────────────── */
function SettingsPanel({ showToast }) {
  const [s, setS] = useState({ dark: false, compact: false, public: true, analytics: true });
  return (
    <div className="settings-card">
      <h3>App Settings</h3>
      <p className="pf-section-label">Appearance</p>
      {[
        { key: "dark",     title: "Dark Mode",      desc: "Switch to a dark interface" },
        { key: "compact",  title: "Compact view",   desc: "Show more content with less spacing" },
      ].map(n => (
        <div className="pf-toggle-row" key={n.key} style={{ border: "1px solid #E8E8E8", borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
          <div className="pf-toggle-info"><div className="pf-toggle-title">{n.title}</div><div className="pf-toggle-desc">{n.desc}</div></div>
          <button className={`pf-toggle ${s[n.key] ? "on" : ""}`} onClick={() => setS(prev => ({ ...prev, [n.key]: !prev[n.key] }))}/>
        </div>
      ))}
      <p className="pf-section-label" style={{ marginTop: 10 }}>Privacy</p>
      {[
        { key: "public",    title: "Public profile",     desc: "Allow others to discover and view your blogs" },
        { key: "analytics", title: "Analytics tracking", desc: "Help us improve BlogCraft with usage data" },
      ].map(n => (
        <div className="pf-toggle-row" key={n.key} style={{ border: "1px solid #E8E8E8", borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
          <div className="pf-toggle-info"><div className="pf-toggle-title">{n.title}</div><div className="pf-toggle-desc">{n.desc}</div></div>
          <button className={`pf-toggle ${s[n.key] ? "on" : ""}`} onClick={() => setS(prev => ({ ...prev, [n.key]: !prev[n.key] }))}/>
        </div>
      ))}
      <button className="btn-orange" style={{ fontSize: 13, padding: "10px 24px", borderRadius: 10 }} onClick={() => showToast("Settings saved!", "success")}>Save Settings</button>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN DASHBOARD COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function Dashboard({ user: initialUser, onLogout }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialUser || null);
  const [activePanel, setActivePanel] = useState("overview");
  const [toast, setToast] = useState(null);
  const [followersCount, setFollowersCount] = useState(128);
  const [followingCount, setFollowingCount] = useState(64);

  const PANEL_TITLES = {
    overview: "Overview", myblogs: "My Blogs", generate: "Generate Blog",
    topics: "Topics", community: "Community", profile: "Profile", settings: "Settings",
  };

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate("/");
    showToast("Signed out successfully.", "success");
  };

  useEffect(() => {
    //if (!user) navigate("/welcome");
  }, [user, navigate]);

  return (
    <div className="db-root">
      <Toast toast={toast}/>
      <Sidebar user={user} activePanel={activePanel} onSwitch={setActivePanel} onLogout={handleLogout}/>
      <div className="db-main">
        <div className="db-topbar">
          <h1 className="db-topbar-title">{PANEL_TITLES[activePanel] || activePanel}</h1>
          <div className="db-topbar-right">
            <button className="db-notif-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 01-3.46 0"/>
              </svg>
              <span className="db-notif-dot"/>
            </button>
            <button className="btn-orange" style={{ fontSize: 13, padding: "9px 20px" }} onClick={() => setActivePanel("generate")}>
              + New Blog
            </button>
          </div>
        </div>
        <div className="db-content">
          {activePanel === "overview"  && <OverviewPanel onSwitch={setActivePanel}/>}
          {activePanel === "myblogs"   && <MyBlogsPanel showToast={showToast}/>}
          {activePanel === "generate"  && <GeneratePanel showToast={showToast}/>}
          {activePanel === "topics"    && <TopicsPanel showToast={showToast}/>}
          {activePanel === "community" && <CommunityPanel followersCount={followersCount} followingCount={followingCount} showToast={showToast}/>}
          {activePanel === "profile"   && (
            <ProfilePanel
              user={user} setUser={setUser} showToast={showToast}
              followersCount={followersCount} setFollowersCount={setFollowersCount}
              followingCount={followingCount} setFollowingCount={setFollowingCount}
            />
          )}
          {activePanel === "settings"  && <SettingsPanel showToast={showToast}/>}
        </div>
      </div>
    </div>
  );
}