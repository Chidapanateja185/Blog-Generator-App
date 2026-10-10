import React from 'react'
import { NAV_ITEMS } from "../../data/dashboardData";
import "./Sidebar.css";

function Sidebar({ user, activePanel, onSwitch, onLogout,}) {

    const initials = user ? (user.fname[0] + (user.lname?.[0] || user.fname[1] || "")).toUpperCase() : "?";

    let lastSection = null;

    return (
        <aside className="db-sidebar">
            <div className="db-sidebar-logo">
                <div className="db-sidebar-logo-icon">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <span className="db-sidebar-logo-text">
                    Blog<span>Creft</span>
                </span>
            </div>
            {/* Navigation */}
            <div className="db-nav">
                {NAV_ITEMS.map((item) => {
                    const showSection = item.section && item.section !== lastSection;

                    if (item.section) {
                        lastSection = item.section;
                    }

                    return (
                        <div key={item.id}>
                            {showSection && (
                                <div className="db-nav-section">
                                    {item.section}
                                </div>
                            )}
                            <button
                                className={`db-nav-item ${
                                activePanel === item.id ? "active" : ""
                                }`}
                                onClick={() => onSwitch(item.id)}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </button>
                        </div>
                    );
                })}
            </div>
            {/* Footer */}
            <div className="db-sidebar-footer">
                <div
                    className="db-user-row"
                    onClick={() => onSwitch("profile")}
                    title="View Profile"
                >
                <div className="db-avatar">
                    {initials}
                </div>
                <div>
                    <div className="db-user-name">
                    {user
                        ? `${user.fname}${
                            user.lname ? " " + user.lname : ""
                        }`
                        : ""}
                    </div>
                    <div className="db-user-email">
                    {user?.email || "John Doe"}
                    </div>
                </div>
                </div>
                <button
                    className="db-logout-btn"
                    onClick={onLogout}
                    >
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>

                    Sign out
                </button>
            </div>
        </aside>
    )
}

export default Sidebar
