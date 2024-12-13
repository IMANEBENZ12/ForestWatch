import React, { useState } from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (onSearch) {
            onSearch(value); // Call the onSearch prop to update the parent component
        }
    };

    return (
        <div className="search-bar-container">
            <input 
                type="text"
                className="search-input"
                value={query}
                onChange={handleSearch}
                placeholder="Search here..."
            />
            {/* Search Icon on the right */}
            <FaSearch className="search-icon" />
        </div>
    );
};

export default SearchBar;
