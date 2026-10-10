import React from "react";
import "./BlogCard.css";

function BlogCard({post, illustration, variant = "home", onReadMore,}) {

  if (!post) return null;

  return (
    <article 
      className={`blog-card blog-card--${variant}`}
      onClick={variant == "explore" ? onReadMore : undefined}
      >

      <div className="blog-card__image">
        {illustration}
      </div>

      <div className="blog-card__body">
        {variant === "explore" && post.category && (
          <p className="blog-card__category">
            {post.category}
          </p>
        )}
        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>

        {variant === "home" && (
          <>
            <p className="blog-card__date">
              {post.date}
            </p>
            <button
              className="btn-orange blog-card__read-more"
              onClick={() => onReadMore?.(post)}
            >
              Read More
            </button>
          </>
        )}

        {variant === "explore" && (
          <div className="blog-card__meta">

            <div className="blog-card__author">
              <div className="blog-card__avatar">
                {post.authorInitials ||
                  post.author?.charAt(0) ||
                  "A"}
              </div>
              <span>{post.author}</span>
            </div>
            <span className="blog-card__read-time">
              ◉ {post.readTime}
            </span>
          </div>
        )}

      </div>
    </article>
  );
}

export default BlogCard;