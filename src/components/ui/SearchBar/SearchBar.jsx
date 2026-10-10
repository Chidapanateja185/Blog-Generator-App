import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <form
      className="search-bar"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search by title, topic, or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button
        type="submit"
        className="search-bar__button"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;