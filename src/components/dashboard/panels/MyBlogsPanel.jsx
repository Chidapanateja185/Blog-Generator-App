import { RECENT_BLOGS } from "../../../data/dashboardData";

export default function MyBlogsPanel({showToast,}) {

  return (
    <div className="db-table-wrap">
      <table className="db-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Topic</th>
            <th>Date</th>
            <th>Status</th>
            <th>Views</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {RECENT_BLOGS.map((blog, index) => (
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

              <td>{blog.views ?? "—"}</td>

              <td>
                <button
                  className="db-view-all"
                  onClick={() =>
                    showToast(
                      "Opening editor...",
                      "success"
                    )
                  }
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}