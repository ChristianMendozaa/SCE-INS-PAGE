
import { useState, useEffect } from 'react';
import EventsCalendar from '../components/events/EventsCalendar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Events = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Eventos y Actividades</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Descubre conferencias, talleres y actividades organizadas por nuestra sociedad.
          </p>
        </div>
      </div>
      
      <EventsCalendar />
      
      <Footer />
    </div>
  );
};

export default Events;
