import { RECENT_BLOGS, OVERVIEW_STATS, OVERVIEW_ACTIONS } from "../../../data/dashboardData";
import "./OverviewPanel.css";


export default function OverviewPanel({ onSwitch }) {
  return (
    <>
      <div className="db-stats">
        {OVERVIEW_STATS.map((s) => (
          <div className="db-stat" key={s.label}>

            <div className="db-stat-label">
              {s.label}
            </div>

            <div className="db-stat-value">
              {s.value}
            </div>

            <div className={`db-stat-change ${s.dir}`}>
              {s.change}
            </div>

          </div>
        ))}
      </div>

      <div className="db-actions">
        {OVERVIEW_ACTIONS.map((a) => (
          <div
            key={a.title}
            className="db-action-card"
            onClick={() => onSwitch(a.panel)}
          >
            <div
              className="db-action-icon"
              style={{ background: a.bg }}
            >
              {a.icon}
            </div>

            <div className="db-action-title">
              {a.title}
            </div>

            <div className="db-action-desc">
              {a.desc}
            </div>

          </div>
        ))}
      </div>

      <div className="db-section-header">
        <span className="db-section-title">
          Recent Blogs
        </span>

        <button
          className="db-view-all"
          onClick={() => onSwitch("myblogs")}
        >
          View all →
        </button>
      </div>

      <div className="db-table-wrap">
        
        <table className="db-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Status</th>
              <th>Views</th>
            </tr>
          </thead>

          <tbody>
            {RECENT_BLOGS.slice(0, 4).map(
              (blog, index) => (
                <tr key={index}>
                  <td>{blog.title}</td>

                  <td>
                    <span className="db-topic-badge">
                      {blog.topic}
                    </span>
                  </td>

                  <td>{blog.date}</td>

                  <td>
                    <span
                      className={`db-status-badge ${blog.status}`}
                    >
                      {blog.status}
                    </span>
                  </td>

                  <td>
                    {blog.views ?? "—"}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>

      </div>
    </>
  );
}