import React from 'react'
import "./Pagination.css"

function Pagination({currentPage = 1, totalPages = 5, onPageChange,}) {

    const pages = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );

    return (
        <div className="pagination">
            {pages.map((page) => (
                <button
                key={page}
                className={
                    currentPage === page
                    ? "pagination__button active"
                    : "pagination__button"
                }
                onClick={() => onPageChange?.(page)}
                >
                {page}
                </button>
            ))}
        </div>
    )
}

export default Pagination;
