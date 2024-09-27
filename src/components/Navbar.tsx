import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar'; // Import the SearchBar component
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the theme from localStorage when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark'); // Apply dark theme to body
    } else {
      setIsDarkMode(false);
      document.body.classList.remove('dark'); // Remove dark theme from body
    }
  }, []);

  // Toggle between dark and light modes
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    if (newTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme); // Save theme to localStorage
  };

  return (
    <nav className={styles.navbar}>
      {/* Website Title */}
      <div className={styles.title}>
        <Link href="/">Insider</Link>
      </div>

      {/* Search Bar below the title */}
      <SearchBar />

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/sentiment">Sentiment</Link>
        </li>
        <li>
          <Link href="/tradeBot">Trade Bot</Link>
        </li>
        <li>
          <Link href="/stocks">Stocks</Link>
        </li>
        <li>
          <Link href="/crypto">Crypto</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>

      {/* Settings button for theme switching */}
      <div className={styles.settings}>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
