import { useState } from "react";
import FollowersTab from "./FollowersTab";
import { PROFILE_TABS, ACTIVITIES } from "../../../data/dashboardData";
import "./ProfilePanel.css";


const BIO_MAX = 160;

function ProfileStrength({ hasPhoto, hasName, emailVerified, hasBio }) {
  const checks = [
    { key: "photo", label: "Photo added", done: hasPhoto },
    { key: "name", label: "Name added", done: hasName },
    { key: "email", label: "Email verified", done: emailVerified },
    { key: "bio", label: "Add a bio", done: hasBio },
  ];

  const doneCount = checks.filter((c) => c.done).length;
  const percent = Math.round((doneCount / checks.length) * 100);

  return (
    <div className="pf-strength-card">
      <div className="pf-strength-head">
        <span className="pf-strength-label">Profile strength</span>
        <span className="pf-strength-percent">{percent}%</span>
      </div>

      <div className="pf-strength-track">
        <div className="pf-strength-fill" style={{ width: `${percent}%` }} />
      </div>

      <div className="pf-strength-checklist">
        {checks.map((c) => (
          <div key={c.key} className={`pf-check-item ${c.done ? "done" : ""}`}>
            <span className="pf-check-icon">
              {c.done ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : null}
            </span>
            <span>{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProfilePanel({user, setUser, showToast, followersCount, setFollowersCount, followingCount, setFollowingCount }) {

    const [activeTab, setActiveTab] = useState("info");
    const [form, setForm] = useState({ fname: user?.fname || "", lname: user?.lname || "", bio: "" });
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


    const fullName = `${form.fname}${form.lname ? " " + form.lname : ""}`;

    return (
     <div className="pf-root">
        {/* Left sidebar */}
        <div>
            <div className="pf-card">
            <div className="pf-cover">
                <div
                  className="pf-avatar-lg"
                  onClick={() => document.getElementById("pf-file-input").click()}
                >
                  {avatarSrc ? (
                    <img
                      src={avatarSrc}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                      alt="avatar"
                    />
                  ) : initials}
                  <span className="pf-avatar-camera-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </span>
                </div>
                <input type="file" id="pf-file-input" accept="image/*" style={{ display: "none" }} onChange={handleAvatar}/>
            </div>

            <div className="pf-profile-summary">
                <button
                  type="button"
                  className="pf-change-photo-btn"
                  onClick={() => document.getElementById("pf-file-input").click()}
                >
                  Click to change photo
                </button>
                <div className="pf-user-name-lg">{fullName}</div>
                <div className="pf-user-email-lg">{user?.email}</div>
                <span className="pf-member-badge">✦ Member</span>
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
            <div className="pf-info-layout">
                <div className="pf-tabs-content active pf-card">
                    <div className="pf-card-head"><h3>Personal Information</h3><p>Update your photo and personal details here.</p></div>
                    <div className="pf-card-body">
                    <div className="pf-row">
                        <div className="pf-field"><label className="pf-label">First Name</label><input className="pf-input" value={form.fname} onChange={e => setForm({...form, fname: e.target.value})} placeholder="John"/></div>
                        <div className="pf-field"><label className="pf-label">Last Name</label><input className="pf-input" value={form.lname} onChange={e => setForm({...form, lname: e.target.value})} placeholder="Doe"/></div>
                    </div>
                    <div className="pf-field">
                        <label className="pf-label">Email Address</label>
                        <input className="pf-input" value={user?.email} readOnly/>
                        <p className="pf-hint">We'll use this to send login and account notifications — never shared publicly.</p>
                    </div>
                    <div className="pf-field">
                        <div className="pf-label-row">
                          <label className="pf-label">Bio</label>
                          <span className="pf-char-count">{form.bio.length} / {BIO_MAX}</span>
                        </div>
                        <textarea
                          className="pf-input"
                          value={form.bio}
                          maxLength={BIO_MAX}
                          onChange={e => setForm({...form, bio: e.target.value})}
                          rows="3"
                          placeholder="Write a short bio..."
                          style={{ resize: "vertical" }}
                        />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 4 }}>
                        <button className="btn-orange" style={{ fontSize: 13, padding: "10px 24px", borderRadius: 10 }} onClick={saveInfo}>Save Changes</button>
                        <span className="pf-save-hint">Changes are saved to your public profile immediately.</span>
                    </div>
                    </div>
                </div>

                <div className="pf-strength-col">
                  <ProfileStrength
                    hasPhoto={!!avatarSrc}
                    hasName={!!(form.fname && form.lname)}
                    emailVerified={true}
                    hasBio={form.bio.trim().length > 0}
                  />
                  <div className="pf-tip-box">
                    <span className="pf-tip-icon">💡</span>
                    <p><strong>Tip:</strong> Profiles with a bio get up to 2× more followers. Tell readers what you write about.</p>
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
                <div className="pf-card-head">
                    <h3>Danger Zone</h3><p>Irreversible actions — proceed with caution</p>
                </div>
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