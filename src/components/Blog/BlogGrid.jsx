import React from "react";
import { POSTS } from "../../data/BlogData";
import "./BlogGrid.css";
import BlogCard from "./BlogCard";

export const BlogIllustrations = [
  <svg
    key="1"
    viewBox="0 0 400 220"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="400" height="220" fill="#D1CDC7" />

    <polygon
      points="0,180 200,60 400,180"
      fill="#EFEFEF"
    />

    <circle
      cx="140"
      cy="90"
      r="50"
      fill="#555"
      opacity="0.4"
    />

    <circle
      cx="260"
      cy="100"
      r="40"
      fill="#555"
      opacity="0.3"
    />

    {[110, 130, 155, 175, 120, 160, 195, 80, 90, 200].map(
      (x, i) => (
        <circle
          key={i}
          cx={x}
          cy={[100, 85, 110, 95, 120, 75, 90, 105, 130, 80][i]}
          r="8"
          fill="#E8607A"
          opacity="0.85"
        />
      )
    )}

    <line
      x1="140"
      y1="140"
      x2="100"
      y2="200"
      stroke="#555"
      strokeWidth="5"
    />

    <line
      x1="140"
      y1="140"
      x2="170"
      y2="195"
      stroke="#555"
      strokeWidth="4"
    />
  </svg>,

  <svg
    key="2"
    viewBox="0 0 400 220"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="400"
      height="220"
      fill="#C8C4BF"
    />

    <polygon
      points="0,180 200,60 400,180"
      fill="#EFEFEF"
    />

    {[120, 150, 180, 210, 240].map((x, i) => (
      <g key={i}>
        <rect
          x={x}
          y={20}
          width="18"
          height="200"
          rx="4"
          fill="#5A9A4A"
          opacity="0.85"
        />

        {[40, 80, 120, 160].map((y, j) => (
          <ellipse
            key={j}
            cx={x + 9 + (i % 2 === 0 ? 30 : -30)}
            cy={y}
            rx="28"
            ry="10"
            fill="#4A8A3A"
            opacity="0.7"
            transform={`rotate(
              ${i % 2 === 0 ? 20 : -20}
              ${x + 9 + (i % 2 === 0 ? 30 : -30)}
              ${y}
            )`}
          />
        ))}
      </g>
    ))}
  </svg>,

  <svg
    key="3"
    viewBox="0 0 400 220"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="400"
      height="220"
      fill="#C8C4BF"
    />

    <polygon
      points="0,180 200,60 400,180"
      fill="#EFEFEF"
    />

    <rect
      x="155"
      y="60"
      width="90"
      height="12"
      rx="2"
      fill="#D4B800"
    />

    <rect
      x="145"
      y="72"
      width="110"
      height="8"
      rx="2"
      fill="#D4B800"
    />

    <rect
      x="170"
      y="80"
      width="12"
      height="120"
      rx="3"
      fill="#CCA800"
    />

    <rect
      x="218"
      y="80"
      width="12"
      height="120"
      rx="3"
      fill="#CCA800"
    />

    <rect
      x="162"
      y="105"
      width="76"
      height="6"
      rx="2"
      fill="#BBA000"
    />

    {[
      [60, 50],
      [340, 55],
      [200, 30],
      [100, 80],
      [310, 75],
    ].map(([cx, cy], i) => (
      <ellipse
        key={i}
        cx={cx}
        cy={cy}
        rx="12"
        ry="5"
        fill="#fff"
        opacity="0.85"
      />
    ))}
  </svg>,

  <svg
    key="4"
    viewBox="0 0 400 220"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="400"
      height="220"
      fill="#B8B4B0"
    />

    <polygon
      points="0,180 200,70 400,180"
      fill="#DDDBD8"
    />

    <circle
      cx="200"
      cy="90"
      r="70"
      fill="#555"
      opacity="0.35"
    />

    {[160, 185, 210, 175, 230, 155, 200, 220, 145, 240].map(
      (x, i) => (
        <g key={i}>
          <circle
            cx={x}
            cy={[
              80,
              65,
              90,
              100,
              75,
              110,
              55,
              115,
              85,
              95,
            ][i]}
            r="9"
            fill="#D4506A"
            opacity="0.8"
          />

          <circle
            cx={x + 4}
            cy={
              [
                80,
                65,
                90,
                100,
                75,
                110,
                55,
                115,
                85,
                95,
              ][i] - 4
            }
            r="5"
            fill="#E8607A"
            opacity="0.6"
          />
        </g>
      )
    )}

    <path
      d="M200 120 Q210 150 190 180 Q205 160 215 190"
      stroke="#666"
      strokeWidth="5"
      fill="none"
    />

    <path
      d="M200 120 Q180 145 175 180"
      stroke="#666"
      strokeWidth="4"
      fill="none"
    />
  </svg>,
];

function BlogGrid() {
  return (
    <section className="blog-grid">
      <div className="blog-grid__inner">
        {POSTS.map((post, index) => (
          <BlogCard
            key={post.id}
            post={post}
            illustration={BlogIllustrations[index]}
          />
        ))}
      </div>

      <div className="blog-grid__footer">
        <button className="btn-orange-outline">
          Load More Posts
        </button>
      </div>
    </section>
  );
}

export default BlogGrid;