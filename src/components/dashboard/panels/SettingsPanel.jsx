import { useState } from "react";
import "./SettingsPanel.css"
import { APPEARANCE_SETTINGS, PRIVACY_SETTINGS } from "../../../data/dashboardData";

function ToggleRow({ setting, checked, onToggle }) {
  return (
    <div className="settings-toggle-row">
      <div className="settings-toggle-left">
        <div className="settings-icon">{setting.icon}</div>
        <div className="settings-toggle-info">
          <div className="settings-toggle-title">{setting.title}</div>
          <div className="settings-toggle-desc">{setting.desc}</div>
        </div>
      </div>
      <button
        className={`settings-toggle ${checked ? "on" : ""}`}
        onClick={onToggle}
        aria-pressed={checked}
      >
        <span />
      </button>
    </div>
  )
}

function SettingsTipsCard() {
  return (
    <div className="settings-highlight-card">
      <span className="settings-highlight-badge">💡 Quick tip</span>
      <h3>Make it yours</h3>
      <p>
        Turn on Dark Mode for late-night writing, or enable Compact view to
        scan more posts at a glance without scrolling.
      </p>
    </div>
  );
}

export default function SettingsPanel() {

  const [settings, setSettings] = useState({ dark: false, compact: false, public: true, analytics: true });
  const toggle = (key) => setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="settings-layout">
      <div className="settings-card">
        <div className="settings-header">
          <h3>App Settings</h3>
          <p>Manage how BlogCraft looks and works for you.</p>
        </div>

        <div className="settings-section">
          <p className="settings-section-label">Appearance</p>
          {APPEARANCE_SETTINGS.map((setting) => (
            <ToggleRow
              key={setting.key}
              setting={setting}
              checked={settings[setting.key]}
              onToggle={() => toggle(setting.key)}
            />
          ))}
        </div>

        <div className="settings-section settings-privacy">
          <p className="settings-section-label">Privacy</p>
          {PRIVACY_SETTINGS.map((setting) => (
            <ToggleRow
              key={setting.key}
              setting={setting}
              checked={settings[setting.key]}
              onToggle={() => toggle(setting.key)}
            />
          ))}
        </div>
        
        <div className="settings-save-area">
          <button
            className="settings-save-btn"
            onClick={() => showToast("Settings saved!", "success")}
          >
            Save Settings
          </button>
          <span className="settings-save-note">You can change these anytime.</span>
        </div>
      </div>

      <div className="settings-side">
        <SettingsTipsCard />

        <div className="settings-tip-card">
          <h4>💡 Did you know?</h4>
          <p>
            Turning on <strong>Compact view</strong> fits more posts on
            screen — handy for scanning your feed quickly on a laptop.
          </p>
        </div>
      </div>
      
    </div>
  )
}