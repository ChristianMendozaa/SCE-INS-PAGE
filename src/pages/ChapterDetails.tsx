
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChapterPage from '../components/chapters/ChapterPage';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const ChapterDetails = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a preference stored in local storage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // If the user has a saved preference, use that. Otherwise, use the system preference
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(prefersDark);
    }

    // Update the document class when the theme changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <ChapterPage />
      </main>
      
      <Footer />
    </div>
  );
};

export default ChapterDetails;
