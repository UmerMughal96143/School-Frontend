import React from 'react'
import './search-styles.css';

export const SearchBox = ({ onSearchChange }) => {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder="Search"
        onChange={onSearchChange}
      />
    </div>
  );
};
