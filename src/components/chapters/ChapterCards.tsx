
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Chapter, chapters } from '../../data/mockData';

const ChapterCards = () => {
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: boolean }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Set all chapters to visible with a staged delay
          const delayedVisibility = {} as { [key: string]: boolean };
          chapters.forEach((chapter, index) => {
            setTimeout(() => {
              setVisibleItems(prev => ({ ...prev, [chapter.id]: true }));
            }, index * 100);
          });
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
  }, []);

  // Extended chapter descriptions
  const extendedDescriptions: { [key: string]: string } = {
    'data-science': 'Nos enfocamos en desarrollar técnicas innovadoras para explorar grandes conjuntos de datos, identificar patrones complejos y extraer conocimientos valiosos. Esto implica la aplicación de algoritmos de aprendizaje automático y técnicas de inteligencia artificial para mejorar la capacidad predictiva y la toma de decisiones informada. Nuestro objetivo es avanzar en la comprensión y aplicación de métodos analíticos que impulsen la innovación y mejoren la eficiencia en diversas disciplinas.',
    'security': 'Nuestro enfoque se centra en identificar y abordar las debilidades en sistemas de información y redes. Desarrollamos estrategias para evaluar la seguridad de infraestructuras digitales, implementar medidas preventivas y mitigar riesgos. Buscamos fortalecer la resistencia ante amenazas cibernéticas en constante evolución, proporcionando soluciones sólidas y eficaces para garantizar la integridad y confidencialidad de la información.',
    'business': 'Investigamos y aplicamos tecnologías emergentes para impulsar la modernización y eficiencia en entornos empresariales. Buscamos entender cómo las organizaciones pueden adaptarse y aprovechar las últimas innovaciones tecnológicas para mejorar procesos, optimizar la toma de decisiones y fomentar la innovación continua. Nuestro objetivo es proporcionar soluciones prácticas que impulsen el crecimiento y la competitividad de las empresas.',
    'systems': 'Nos dedicamos a desarrollar técnicas para mejorar el rendimiento y la eficiencia de hardware y software en sistemas informáticos. Exploramos nuevas formas de diseñar arquitecturas de sistemas que maximicen la velocidad y minimicen el consumo de recursos. Nuestro objetivo es avanzar en la creación de sistemas más eficientes y potentes, abordando desafíos clave en la optimización de la tecnología informática.'
  };

  // Mapping of chapter leaders
  const chapterLeaders: { [key: string]: string } = {
    'data-science': 'Ing. Oswaldo Figueroa',
    'security': 'Ing. Lourdes Peredo',
    'business': 'Ing. Lucero Yáñez',
    'systems': 'Ing. Ángel Ávila'
  };

  // Chapter logos mapping - using the new SCE logo for systems
  const chapterLogos: { [key: string]: string } = {
    'data-science': '/images/Logo - Ciencia de datos.png', // Turquoise logo
    'security': '/images/Logo - Seguridad de Sistemas.png',    // Orange logo
    'business': '/images/Logo - Tecnologias empresariales 2.png',    // Green logo
    'systems': '/images/Logo - Hardware y Software.png'      // Updated main SCE logo
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Capítulos de Investigación</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre nuestras áreas de investigación especializada y los proyectos
            innovadores que desarrollamos en cada capítulo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {chapters.map((chapter) => (
            <ChapterCard 
              key={chapter.id} 
              chapter={chapter} 
              isVisible={visibleItems[chapter.id] || false}
              extendedDescription={extendedDescriptions[chapter.id] || chapter.description}
              leader={chapterLeaders[chapter.id] || chapter.leader}
              logo={chapterLogos[chapter.id]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ChapterCardProps {
  chapter: Chapter;
  isVisible: boolean;
  extendedDescription: string;
  leader: string;
  logo: string;
}

const ChapterCard = ({ chapter, isVisible, extendedDescription, leader, logo }: ChapterCardProps) => {
  // Add emoji based on chapter id
  const getEmoji = (id: string) => {
    switch(id) {
      case 'data-science':
        return '🤖';
      case 'security':
        return '🔏';
      case 'business':
        return '🏭';
      case 'systems':
        return '🧑‍💻';
      default:
        return '';
    }
  };
  
  return (
    <div 
      className={`glass-card rounded-xl overflow-hidden h-full transition-all duration-500 border-l-4 ${chapter.colorClass} transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className={`w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center ${chapter.bgColorClass.replace('text-white', '')}`}>
            <img 
              src={logo} 
              alt={`${chapter.name} Logo`} 
              className="w-12 h-12 object-contain"
              onError={(e) => {
                // Fallback to main SCE logo if chapter logo fails to load
                (e.target as HTMLImageElement).src = '/images/SCE-LOGO-V4.png';
              }}
            />
          </div>
          <h3 className="text-xl font-semibold ml-3">
            {chapter.name} {getEmoji(chapter.id)}
          </h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{extendedDescription}</p>
        
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span className="font-medium">Responsable:</span> {leader}
        </div>
        
        <Link 
          to={`/chapter/${chapter.id}`} 
          className={`group inline-flex items-center text-sm font-medium ${chapter.colorClass} hover:underline`}
        >
          Ver más
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ChapterCards;
