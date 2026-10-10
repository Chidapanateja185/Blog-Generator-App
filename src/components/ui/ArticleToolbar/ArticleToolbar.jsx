import React from 'react'
import "./ArticleToolbar.css"

function ArticleToolbar({currentPage = 1, articlesPerPage = 6, totalArticles = 28, viewMode = "list", onViewChange,}) {
    
    const start = totalArticles === 0 ? 0 : (currentPage - 1) * articlesPerPage + 1;

    const end = Math.min(
        currentPage * articlesPerPage,
        totalArticles
    );
  
    return (
        <div className="article-toolbar">
            <p className="article-toolbar__count">
                Showing {start}–{end} of {totalArticles} articles
            </p>

            <div className="article-toolbar__views">
                <button
                    className={
                        viewMode === "grid"
                        ? "view-button active"
                        : "view-button"
                    }
                    onClick={() => onViewChange?.("grid")}
                    aria-label="Grid view"
                    >
                    ▦
                </button>
                
                <button
                    className={
                        viewMode === "compact"
                        ? "view-button active"
                        : "view-button"
                    }
                    onClick={() => onViewChange?.("compact")}
                    aria-label="Compact view"
                    >
                    ▦
                </button>
                
                <button
                    className={
                        viewMode === "list"
                        ? "view-button active"
                        : "view-button"
                    }
                    onClick={() => onViewChange?.("list")}
                    aria-label="List view"
                    >
                    ☰
                </button>

            </div>
        </div>
    ) 
}

export default ArticleToolbar;
