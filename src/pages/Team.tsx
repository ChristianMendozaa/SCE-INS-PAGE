import { useState, useEffect } from 'react';
import TeamSection from '../components/team/TeamSection';
import ActiveMembers from '../components/members/ActiveMembers';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Team = () => {
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
      
      <div className="pt-16 pb-10">
        <div className="section-container pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Directiva y Contactos</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Conoce a los líderes que hacen posible nuestra sociedad científica.
          </p>
        </div>
      </div>
      
      <TeamSection />
      
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="section-container">
          <ActiveMembers />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Team;