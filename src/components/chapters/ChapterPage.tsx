import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CalendarDays, MapPin, ExternalLink } from 'lucide-react';
import { chapters, Chapter, projects } from '../../data/mockData';
import ChapterProjects from './ChapterProjects';

const ChapterPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [chapterProjects, setChapterProjects] = useState([]);

  // Chapter logos mapping - using the new SCE logo for systems
  const chapterLogos: { [key: string]: string } = {
    'data-science': '/images/Logo - Ciencia de datos.png', // Turquoise logo
    'security': '/images/Logo - Seguridad de Sistemas.png',    // Orange logo
    'business': '/images/Logo - Tecnologias empresariales 2.png',    // Green logo
    'systems': '/images/Logo - Hardware y Software.png'      // Updated main SCE logo
  };

  // Default SCE logo to use as fallback
  const defaultLogo = '/images/SCE-LOGO-V4.png';

  useEffect(() => {
    // Simulate fetching data from API
    setLoading(true);
    
    setTimeout(() => {
      const foundChapter = chapters.find(c => c.id === id);
      if (foundChapter) {
        setChapter(foundChapter);
        
        // Get projects for this chapter
        const filteredProjects = projects.filter(p => p.chapterId === id);
        setChapterProjects(filteredProjects);
      }
      setLoading(false);
      
      // Trigger entrance animations after a slight delay
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-semibold mb-4">Capítulo no encontrado</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          El capítulo que buscas no existe o ha sido removido.
        </p>
        <button 
          onClick={() => navigate('/chapters')}
          className="btn-primary"
        >
          Ver todos los capítulos
        </button>
      </div>
    );
  }

  // Get the chapter logo or use default if not found
  const chapterLogo = chapterLogos[chapter.id] || defaultLogo;

  return (
    <div className="pt-16">
      {/* Banner with chapter color */}
      <div 
        className={`w-full h-64 md:h-80 ${chapter.bgColorClass} relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-white/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-white/5 filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
          <Link 
            to="/chapters" 
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a capítulos
          </Link>
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mr-4">
              <img 
                src={chapterLogo} 
                alt={`${chapter.name} Logo`} 
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  // Fallback to default SCE logo if chapter logo fails to load
                  (e.target as HTMLImageElement).src = defaultLogo;
                }}
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white">{chapter.name}</h1>
          </div>
        </div>
      </div>
      
      <div className="section-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div 
            className={`lg:col-span-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="glass-card rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Acerca del capítulo</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{chapter.longDescription}</p>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Líneas de investigación</h3>
                <ul className="space-y-2">
                  {chapter.researchLines.map((line, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`inline-block w-2 h-2 rounded-full ${chapter.bgColorClass} mt-2 mr-3`}></span>
                      <span className="text-gray-600 dark:text-gray-300">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Chapter projects section */}
            {/*<div 
              className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mb-8`}
            >
              <h2 className="text-2xl font-semibold mb-4">Proyectos del capítulo</h2>
              <ChapterProjects 
                projects={chapterProjects}
                colorClass={chapter.colorClass}
                bgColorClass={chapter.bgColorClass}
              />
            </div> */}
            
            {/* Chapter events 
            <div 
              className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-2xl font-semibold mb-4">Eventos del capítulo</h2>
              <div className="space-y-4">
                {chapter.events.map(event => (
                  <div key={event.id} className={`glass-card rounded-xl p-6 border-l-4 ${chapter.colorClass.replace('text-', 'border-')}`}>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm mb-4">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {new Date(event.date).toLocaleDateString('es-ES', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.location}
                      </div>
                    </div>
                    
                    <a 
                      href={event.registerLink} 
                      className={`inline-flex items-center text-sm font-medium ${chapter.colorClass} hover:underline`}
                    >
                      Registrarse
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>*/}
          </div>
          
          {/* Sidebar */}
          <div 
            className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Leader info */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Responsable del capítulo</h3>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="font-medium text-lg">{chapter.leader}</p>
                {/* <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Contacto: example@ucb.edu.bo
                </p>*/}
              </div>
            </div>
            
            {/* Join chapter CTA */}
            <div className={`rounded-xl p-6 ${chapter.bgColorClass}`}>
              <h3 className="text-xl font-semibold text-white mb-3">¿Quieres formar parte?</h3>
              <p className="text-white/90 mb-4">
                Únete a nuestro capítulo y participa en proyectos de investigación innovadores.
              </p>
              <Link 
                to="/membership"
                className="inline-block w-full py-3 px-4 bg-white text-center font-medium rounded-lg text-gray-900 hover:shadow-lg transition-all"
              >
                Postular ahora
              </Link>
            </div>
            
            {/* Chapter image */}
            <div className="overflow-hidden rounded-xl">
              <img 
                src={chapter.image} 
                alt={chapter.name} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterPage;