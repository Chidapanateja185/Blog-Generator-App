import React from 'react'
import "./BlogList.css";
import BlogCard from "./BlogCard"
import BlogGrid, { BlogIllustrations } from "./BlogGrid";

function BlogList({blogs = [], viewMode = "list", onBlogClick,}) {

    return (
        <div className={`blog-list blog-list--${viewMode}`}>
            {blogs.map((blog, index) => (
            <BlogCard
                key={blog.id}
                post={blog}
                illustration={BlogIllustrations[index]}
                variant="explore"
                onReadMore={() => onBlogClick?.(blog)}
            />
            ))}
        </div>
    )
}

export default BlogList
