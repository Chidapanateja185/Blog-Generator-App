import React from 'react'
import Button from '../Button/Button';
import "./ExploreFilter.css"

function ExploreFilter({
  selectedTopics = [],
  selectedReadTimes = [],
  sortBy = "newest",
  onTopicChange,
  onReadTimeChange,
  onSortChange,
  onClearFilters,
}) {

    const topics = [
        { name: "Architecture", count: 1 },
        { name: "Automotive", count: 1 },
        { name: "Business", count: 1 },
        { name: "Coding", count: 1 },
        { name: "Education", count: 1 },
        { name: "Entertainment", count: 1 },
        { name: "Environment", count: 1 },
        { name: "Fashion", count: 1 },
        { name: "Finance", count: 2 },
        { name: "Food", count: 2 },
        { name: "Gaming", count: 1 },
        { name: "Health & Wellness", count: 1 },
        { name: "History", count: 1 },
        { name: "Lifestyle", count: 2 },
        { name: "Mental Health", count: 1 },
        { name: "Music", count: 1 },
        { name: "Parenting", count: 1 },
        { name: "Photography", count: 1 },
        { name: "Politics", count: 1 },
        { name: "Science", count: 1 },
        { name: "Spirituality", count: 1 },
        { name: "Sports", count: 1 },
        { name: "Technology", count: 2 },
        { name: "Travel", count: 1 },
    ];

    const readTimes = [
        { name: "Under 5 min", value: "under-5", count: 18 },
        { name: "5–10 min", value: "5-10", count: 24 },
        { name: "10+ min", value: "10-plus", count: 6 },
    ];

    return (
        <aside className="explore-filters">
            <div className="filter-section">
                <h3 className="filter-section__title">TOPICS</h3>
                <div className="filter-options">
                    {topics.map((topic) => (
                        <label
                            key={topic.name}
                            className="filter-option"
                        >
                        <input
                            type="checkbox"
                            checked={selectedTopics.includes(topic.name)}
                            onChange={() =>
                            onTopicChange?.(topic.name)
                            }
                        />
                        <span className="filter-option__name">{topic.name}</span>
                        <span className="filter-option__count">{topic.count}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="filter-section">
                <h3 className="filter-section__title">Read Time</h3>
                <div className="filter-options">
                    {readTimes.map((time) => (
                        <label
                            key={time.value}
                            className="filter-option"
                        >
                            <input 
                                type="checkbox"
                                checked={selectedReadTimes.includes(time.value)}
                                onChange={() =>
                                onReadTimeChange?.(time.value)
                                }
                            />
                            <span className="filter-option__name">
                                {time.name}
                            </span>

                            <span className="filter-option__count">
                                {time.count}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="filter-section">
                <h3 className="filter-section__title">SORT BY</h3>
                <select
                    className="filter-sort"
                    value={sortBy}
                    onChange={(e) =>
                        onSortChange?.(e.target.value)
                    }
                >
                    <option className="newest"> Newest First </option>
                    <option className="oldest">Oldest First</option>
                    <option className="popular">Most Popular</option>
                </select>
            </div>
            <Button 
                variant="filter-clear"
                onClick={onClearFilters}
            >
                Clear all filters
            </Button>
        </aside>
    );
}

export default ExploreFilter;
