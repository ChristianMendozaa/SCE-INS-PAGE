
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a small delay before animations start
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-10 w-64 h-64 rounded-full bg-chapter-data-science/10 filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-10 w-64 h-64 rounded-full bg-chapter-security/10 filter blur-3xl animate-float animate-delay-200"></div>
      <div className="absolute top-2/3 left-1/4 w-32 h-32 rounded-full bg-chapter-business/10 filter blur-3xl animate-float animate-delay-300"></div>
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-chapter-systems/10 filter blur-3xl animate-float animate-delay-400"></div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <span 
            className={`inline-block py-1 px-3 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground text-xs font-medium mb-4 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Sociedad Científica Estudiantil UCB
          </span>
          
          <div className={`flex items-center justify-center mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img 
              src="/images/SCE-LOGO-V4.png" 
              alt="SCE Logo" 
              className="h-20 w-20 mr-4" 
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-chapter-data-science via-chapter-security to-chapter-business">
                Norbert Wiener
              </span> Hub
            </h1>
          </div>
          
          <p 
            className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Investigación, innovación y desarrollo tecnológico
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <Link 
              to="/membership" 
              className="btn-primary group"
            >
              Formar parte
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/chapters" 
              className="btn-outline"
            >
              Conocer capítulos
            </Link>
          </div>
          
          {/* Stats */}
          <div 
            className={`grid grid-cols-2 sm:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">4</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Capítulos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">+20</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Miembros</p>
            </div>
            {/*<div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">+20</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Eventos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">+15</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Publicaciones</p>
            </div>*/}
          </div>
        </div>
      </div>
      
      {/* Down arrow for scrolling */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div 
          className={`w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center cursor-pointer hover:border-gray-500 dark:hover:border-gray-500 transition-all duration-300 animate-pulse ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
        >
          <ArrowRight className="h-4 w-4 text-gray-400 dark:text-gray-600 transform rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
