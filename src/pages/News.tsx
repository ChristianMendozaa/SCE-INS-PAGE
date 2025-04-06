
import { useState, useEffect } from 'react';
import { news, chapters } from '../data/mockData';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const News = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

    // Set visible after a small delay for animations
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  const getChapterColor = (chapterId: string) => {
    const chapter = chapters.find(c => c.id === chapterId);
    return chapter ? chapter.bgColorClass : '';
  };

  const getChapterName = (chapterId: string) => {
    const chapter = chapters.find(c => c.id === chapterId);
    return chapter ? chapter.name : '';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="pt-16 pb-10">
        <div className="section-container pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Noticias y Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Mantente informado sobre las últimas novedades y actividades de nuestra sociedad.
          </p>
        </div>
      </div>
      
      <section className="py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div 
                key={item.id}
                className={`glass-card rounded-xl overflow-hidden transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`chapter-pill ${getChapterColor(item.chapterId)}`}>
                      {getChapterName(item.chapterId)}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(item.date).toLocaleDateString('es-ES', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{item.summary}</p>
                  
                  <a 
                    href={`#news/${item.id}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                  >
                    Leer más
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default News;
