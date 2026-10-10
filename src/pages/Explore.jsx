import React from 'react'
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import SearchBar from '../components/ui/SearchBar/SearchBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleToolbar from '../components/ui/ArticleToolbar/ArticleToolbar';
import Pagination from '../components/ui/Pagination/Pagination';
import BlogList from '../components/Blog/BlogList';
import { blogs } from '../data/BlogData';
import ExploreFilter from '../components/ui/Filters/ExploreFilter';
import "../css/Explore.css"
import BlogPage from '../components/Blog/BlogPage';


const Explore = () => {

    const handleSearch = (searchTerm) => {
        console.log("Searching:", searchTerm);
    };

    const navigate = useNavigate();

    const [selectedTopics, setSelectedTopics] = useState([]);
    const [selectedReadTimes, setSelectedReadTimes] = useState([]);
    const [sortBy, setSortBy] = useState("newest");
    const [viewMode, setViewMode] = useState("list");
    const [currentPage, setCurrentPage] = useState(1);

    const articlesPerPage = 4;

    const totalPages = Math.ceil(blogs.length / articlesPerPage);

    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;

    const currentBlogs = blogs.slice(startIndex, endIndex);

    const handleBlogClick = (blog) => {
        console.log("Selected blog:", blog);
        navigate(`/blog/${blog.id}`);
    };

    const handleClearFilters = () => {
        setSelectedTopics([]);
        setSelectedReadTimes([]);
        setSortBy("newest");
        setCurrentPage(1);
    };

    const handleReadTimeChange = (readTime) => {
        setSelectedReadTimes((previous) => {
        if (previous.includes(readTime)) {
            return previous.filter(
            (item) => item !== readTime
            );
        }
        return [...previous, readTime];
        });
    };

    const handleTopicChange = (topic) => {
        setSelectedTopics((previous) => {
        if (previous.includes(topic)) {
            return previous.filter(
            (item) => item !== topic
            );
        }
        return [...previous, topic];
        });
    };

    return (
        <>
            <Header />
            <Hero
                title="Explore Blogs"
                description="Discover AI-powered articles across 24 topics, written by creators just like you."
                variant="explore"
            >
                <SearchBar onSearch={handleSearch} />
            </Hero>
            
            {/* Main Content */}

            <main className="explore-content">
                {/* Filters */}
                <aside className="explore-sidebar">
                <ExploreFilter
                    selectedTopics={selectedTopics}
                    selectedReadTimes={selectedReadTimes}
                    sortBy={sortBy}

                    onTopicChange={handleTopicChange}
                    onReadTimeChange={handleReadTimeChange}
                    onSortChange={setSortBy}
                    onClearFilters={handleClearFilters}
                />

                </aside>

                {/* Results */}
                <section className="explore-results">

                <ArticleToolbar
                    currentPage={currentPage}
                    articlesPerPage={articlesPerPage}
                    totalArticles={blogs.length}
                    viewMode={viewMode}
                    onViewChange={setViewMode}
                />

                <BlogList
                    blogs={currentBlogs}
                    viewMode={viewMode}
                    onBlogClick={handleBlogClick}
                />

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
                </section>
            </main>
        </>
    )
}

export default Explore
