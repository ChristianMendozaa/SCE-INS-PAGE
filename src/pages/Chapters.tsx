
import ChapterCards from '../components/chapters/ChapterCards';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useState, useEffect } from 'react';

const Chapters = () => {
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
    <div className="min-h-screen bg-white dark:bg-gray-950 overflow-x-hidden">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="pt-20">
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Nuestros Capítulos de Investigación</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Descubre las áreas de investigación especializada en las que trabajamos 
                y los proyectos innovadores que desarrollamos.
              </p>
            </div>
            
            <ChapterCards />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chapters;
