import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // This will trigger when the user presses "Enter"
    console.log('Searching for:', query);
    // Add your search functionality here
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for stock tickers"
        className={styles.searchInput}
      />
    </form>
  );
};

export default SearchBar;
