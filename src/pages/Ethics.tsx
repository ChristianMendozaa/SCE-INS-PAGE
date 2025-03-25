
import { useState, useEffect, useRef } from 'react';
import { Download, Mail, Phone, Calendar } from 'lucide-react';
import { values } from '../data/mockData';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Ethics = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  const ethicalValues = [
    { id: 1, title: 'Integridad', description: 'Actuamos con honestidad y ética en todas nuestras actividades de investigación.' },
    { id: 2, title: 'Confidencialidad', description: 'Respetamos la privacidad y protegemos la información sensible en nuestros proyectos.' },
    { id: 3, title: 'Responsabilidad', description: 'Asumimos la responsabilidad de nuestras acciones y decisiones en el ámbito científico.' },
    { id: 4, title: 'Respeto y equidad', description: 'Promovemos un ambiente inclusivo y equitativo para todos los miembros.' },
    { id: 5, title: 'Transparencia', description: 'Comunicamos de manera clara y abierta nuestros procesos y resultados.' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="pt-16 pb-10">
        <div className="section-container pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Normas y Ética</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Exploramos los principios y valores que guían nuestro trabajo científico.
          </p>
        </div>
      </div>
      
      <section ref={sectionRef} className="py-12">
        <div className="section-container">
          <div className="glass-card rounded-xl p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Valores Institucionales</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Estos son los valores que representan el núcleo de nuestra sociedad científica 
              y que guían todas nuestras actividades e investigaciones.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ethicalValues.map((value, index) => (
                <div 
                  key={value.id}
                  className={`glass-card rounded-xl p-6 border-t-4 border-primary transition-all duration-700 delay-${index * 100} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contacts section */}
          <div 
            className={`glass-card rounded-xl p-8 mb-12 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contactos</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              ¿Tienes una duda? Para cualquier consulta, puedes contactar a la docente 
              coordinadora o a los estudiantes de la directiva:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Ing. Lourdes Peredo</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-3">Docente Coordinadora de la SCE</p>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:lperedo.q@ucb.edu.bo" className="hover:underline">lperedo.q@ucb.edu.bo</a>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Christian Mendoza</h3>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:christian.mendoza.h@ucb.edu.bo" className="hover:underline">christian.mendoza.h@ucb.edu.bo</a>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+591 75217073</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar className="h-4 w-4 mr-2" />
                  <a href="#" className="hover:underline">Ver calendario</a>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Cesar Vera</h3>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:cesar.vera@ucb.edu.bo" className="hover:underline">cesar.vera@ucb.edu.bo</a>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+591 73479050</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar className="h-4 w-4 mr-2" />
                  <a href="#" className="hover:underline">Ver calendario</a>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className={`text-center transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a 
              href="#"
              className="btn-outline inline-flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Descargar documento completo
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Ethics;
