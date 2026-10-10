import React from 'react'
import './BlogPage.css'
import { blogs } from "../../data/BlogData";
import Button from "../ui/Button/Button";
import { useParams, useNavigate } from 'react-router-dom';
import { BlogIllustrations } from "./BlogGrid";
import {
    CalendarDays,
    Clock3,
    Eye,
    Heart,
    Bookmark,
    Share2,
    ArrowLeft,
    ChevronRight,
    LockKeyhole,
    Sparkles,
    ArrowUpRight,
} from "lucide-react";

function BlogPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const blog = blogs.find(
        (blog) => String(blog.id) === String(id)
    );

    if (!blog) {
        return (
            <div className="blog-page">
                <header className="blog-page__header">
                    <h1>Blog Not Found</h1>
                    <p>The blog you are looking for does not exist.</p>
                    <button onClick={() => navigate(-1)}>Go Back</button>
                </header>
            </div>
        );
    }

    const blogId = Number(blog.id);

    console.log("Blog ID:", blogId);
    console.log(
        "Illustration Index:",
        (blogId - 1) % BlogIllustrations.length
    );

    const relatedPosts = blogs
        .filter((item) => String(item.id) !== String(id))
        .slice(0, 2);

    const illustration = BlogIllustrations[blogId % BlogIllustrations.length];

    return (
       <div className="blog-page">
            <header className="blog-page__topbar">

                <div className="blog-page__breadcrumb">
                    <button 
                        onClick={() => navigate(-1)}
                        className="blog-page__back"
                    >
                        <ArrowLeft
                            className="blog-page__meta-icon"
                            size={16}
                            strokeWidth={1.8}
                        />
                        Back
                    </button>

                    <span className="blog-page__separator">|</span>
                    
                    <span className="blog-page__breadcrumb-home">Home</span>
                   
                    <ChevronRight
                        className="blog-page__meta-icon"
                        size={16}
                        strokeWidth={1.8}
                    />
                    
                    <span className="blog-page__breadcrumb-current">{blog.category}</span>
                </div>

                <div 
                    className="blog-page__logo"
                    onClick={() => navigate("/")}    
                >
                    <div className="blog-page__logo-icon">
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

                    <span className="blog-page__logo-text">
                        Blog<span>Craft</span>
                    </span>

                </div>

                <div className="blog-page__actions">
                    <button className="blog-page__action">
                        <Heart
                            className="blog-page__meta-icon"
                            size={16}
                            strokeWidth={1.8}
                        />
                        <span>{blog.likes}</span>
                    </button>

                    <button className="blog-page__action">
                        <Bookmark
                            className="blog-page__meta-icon"
                            size={16}
                            strokeWidth={1.8}
                        />
                        <span>Save</span>
                    </button>

                    <button className="blog-page__action blog-page__action--share">
                        <Share2
                            className="blog-page__meta-icon"
                            size={16}
                            strokeWidth={1.8}
                        />
                        <span>Share</span>
                    </button>

                </div>
            </header>

            <section className="blog-page__hero">
                <div className="blog-page__hero-content">

                     {/* Category */}
                    <div className="blog-page__category">
                        {blog.category}
                    </div>

                     {/* Title */}
                    <h1 className="blog-page__title">
                        {blog.title}
                    </h1>

                    {/* Description */}
                    <p className="blog-page__description">
                        {blog.description}
                    </p>

                    {/* Metadata */}
                    <div className="blog-page__metadata">
                        {/* Author */}
                        <div className="blog-page__author">
                            <div className="blog-page__avatar">
                                {blog.authorInitials ||
                                    blog.author?.charAt(0) ||
                                    "A"}
                            </div>
                            <div className="blog-page__author-info">
                                <strong>
                                    {blog.author}
                                </strong>

                                <span>
                                    @{blog.author
                                        ?.toLowerCase()
                                        .replace(/\s+/g, "")}
                                </span>
                            </div>       
                        </div>

                        {/* Date */}
                        <div className="blog-page__meta-item">
                            <CalendarDays
                                className="blog-page__meta-icon"
                                size={16}
                                strokeWidth={1.8}
                            />

                            <span>
                                {blog.date || "Apr 28, 2026"}
                            </span>
                        </div>
                        
                        {/* Read Time */}
                        <div className="blog-page__meta-item">
                            <Clock3
                                className="blog-page__meta-icon"
                                size={16}
                                strokeWidth={1.8}
                            />

                            <span>
                                {blog.readTime} min read
                            </span>
                        </div>

                        {/* Views */}
                        <div className="blog-page__meta-item">
                            
                            <Eye
                                className="blog-page__meta-icon"
                                size={16}
                                strokeWidth={1.8}
                            />

                            <span>
                                {blog.views || "2,842"} views
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            
             <main className="blog-page__main">

                <div className="blog-page__featured-image">
                    {illustration}
                </div>

                <div className="blog-page__layout">
                    <article className="blog-page__content">
                         <div className="blog-page__preview">
                            <div className="blog-page__preview-text">
                                You're reading a{" "}
                                <strong>free preview</strong>
                                . Sign in to read the full article
                                and unlock all features.
                            </div>
                            <Button
                                variant="primary"
                                onClick={() => navigate("/login")}
                            >
                                Sign In to Continue
                            </Button>
                         </div>
                            {/* Intro */}
                            <p className="blog-page__intro">{blog.description}</p>
                            {/* Article separator */}
                            <div className="blog-page__divider" />
                            
                            {/* Member gate */}
                            <section className="blog-page__member-gate">
                                <div className="blog-page__lock">
                                    <LockKeyhole
                                        size={25}
                                        strokeWidth={1.8}
                                    />
                                </div>
                                <h2>This article is for members only</h2>
                                <p>Sign in or create a free account toread the full article and unlock all BlogCraft features.</p>
                                <div className="blog-page__benefits">
                                    <span>
                                        <Sparkles size={14} />
                                        Full article access
                                    </span>

                                    <span>
                                        <Sparkles size={14} />
                                        Like & save posts
                                    </span>

                                    <span>
                                        <Sparkles size={14} />
                                        Join the discussion
                                    </span>

                                    <span>
                                        <Sparkles size={14} />
                                        Daily blog digest
                                    </span>
                                    
                                </div>

                                {/* Buttons */}
                                <div className="blog-page__member-actions">
                                    <Button
                                        variant="blog-page__signin"
                                        onClick={() => navigate("/login")}
                                    >
                                        Sign In <ArrowUpRight size={16} />
                                    </Button>
                                    <Button
                                        variant="blog-page__signup"
                                        onClick={() => navigate("/signup")}
                                    >
                                        Create Account <ArrowUpRight size={16} />
                                    </Button>
                                </div>
                            </section>
                        </article>

                        <aside className="blog-page__sidebar">
                            <section className="blog-sidebar-card">
                                <h3>In this Article</h3>
                                <ol>
                                    <li>AI-Powered Diagnostics</li>
                                    <li>Reducing Physician Burnout</li>
                                    <li>Drug Discovery at Machine Speed</li>
                                    <li>The Road Ahead</li>
                                </ol>
                            </section>

                            <section className="blog-sidebar-card blog-sidebar-card--author">
                                <div className="blog-sidebar__avatar">
                                    {blog.authorInitials ||
                                        blog.author?.charAt(0) ||
                                        "A"}
                                </div>
                                <h3>{blog.author}</h3>
                                <p>
                                    @
                                    {blog.author
                                        ?.toLowerCase()
                                        .replace(/\s+/g, "")}
                                </p>

                                <div className="blog-sidebar__stats">
                                     <div>
                                        <strong>34</strong>
                                        <span>Posts</span>
                                    </div>
                                    <div>
                                        <strong>2.1k</strong>
                                        <span>Followers</span>
                                    </div>
                                    <div>
                                        <strong>18k</strong>
                                        <span>Views</span>
                                    </div>
                                </div>

                                <section className="blog-sidebar-card">
                                    <h3>Related Posts</h3>
                                    <div className="blog-page__related">
                                        {relatedPosts.map(
                                            (relatedBlog, index) => {

                                                const relatedIndex =
                                                    blogs.findIndex(
                                                        (item) =>
                                                            item.id ===
                                                            relatedBlog.id
                                                    );

                                                const relatedIllustration =
                                                    BlogIllustrations[
                                                        relatedIndex %
                                                        BlogIllustrations.length
                                                    ];

                                                return (
                                                    <button
                                                        key={relatedBlog.id}
                                                        className="blog-page__related-item"
                                                        onClick={() =>
                                                            navigate(
                                                                `/blog/${relatedBlog.id}`
                                                            )
                                                        }
                                                    >

                                                        <div className="blog-page__related-image">
                                                            {relatedIllustration}
                                                        </div>

                                                        <div className="blog-page__related-info">

                                                            <strong>
                                                                {relatedBlog.title}
                                                            </strong>

                                                            <span>
                                                                {relatedBlog.readTime ||
                                                                    6}{" "}
                                                                min read ·{" "}
                                                                {relatedBlog.category}
                                                            </span>

                                                        </div>

                                                    </button>
                                                );
                                            }
                                    )}
                            </div>
                        </section>
                    </section>
                    </aside>
                </div>
            </main>
        </div>
    );
}

export default BlogPage;