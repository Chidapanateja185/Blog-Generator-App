import React from 'react'
import "./topbar.css";

function topbar({ title, onNewBlog,}) {
  return (
    <header className="db-topbar">
        <h1 className="db-topbar-title">{title}</h1>
        <div className="db-topbar-right">
            <button className="db-notif-btn">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#666"
                    strokeWidth="2"
                >
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 01-3.46 0" />
                </svg>

                <span className="db-notif-dot" />
            </button>
            <button
                className="btn-orange"
                style={{
                    fontSize: 13,
                    padding: "9px 20px",
                }}
                onClick={onNewBlog}
                >
                + New Blog
            </button>
        </div>
    </header>
  )
}

export default topbar
