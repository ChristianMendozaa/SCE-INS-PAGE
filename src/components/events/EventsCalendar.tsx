
import { useState, useEffect, useRef } from 'react';
import { CalendarDays, MapPin, ExternalLink, Filter } from 'lucide-react';
import { allEvents, chapters } from '../../data/mockData';

const EventsCalendar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const filteredEvents = filter 
    ? allEvents.filter(event => event.chapterId === filter)
    : allEvents;
  
  const sortedEvents = [...filteredEvents].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  useEffect(() => {
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
  }, []);

  const getChapterColor = (chapterId: string) => {
    const chapter = chapters.find(c => c.id === chapterId);
    return chapter ? chapter.bgColorClass : '';
  };

  const getChapterName = (chapterId: string) => {
    const chapter = chapters.find(c => c.id === chapterId);
    return chapter ? chapter.name : '';
  };

  // Get dark variant of chapter color for better text contrast in light mode
  const getChapterDarkColor = (chapterId: string) => {
    switch (chapterId) {
      case 'security':
        return 'bg-chapter-security-dark';
      case 'data-science':
        return 'bg-chapter-data-science-dark';
      case 'business':
        return 'bg-chapter-business-dark';
      case 'systems':
        return 'bg-chapter-systems-dark';
      default:
        return 'bg-gray-800';
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Próximos Eventos</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
              Conferencias, talleres y actividades organizadas por nuestra sociedad científica.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <div className="relative">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Filtrar por capítulo:</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <button
                  onClick={() => setFilter(null)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    filter === null 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Todos
                </button>
                {chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => setFilter(chapter.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      filter === chapter.id 
                        ? `${chapter.bgColorClass.replace('-DEFAULT', '-dark')} text-white` 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {chapter.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {sortedEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No se encontraron eventos con el filtro seleccionado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-md">
                  {/* Date Header */}
                  <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-3 border-b border-gray-100 dark:border-gray-700">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center w-20">
                      <span className="block text-3xl font-bold">
                        {new Date(event.date).getDate()}
                      </span>
                      <span className="block text-sm text-gray-500 dark:text-gray-400 capitalize">
                        {new Date(event.date).toLocaleDateString('es-ES', { month: 'short' })}
                      </span>
                    </div>
                  </div>
                  
                  {/* Event Details - Using dark variant colors for better contrast in light mode */}
                  <div className={`flex-grow ${
                    getChapterDarkColor(event.chapterId)
                  } text-white p-5`}>
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full">
                        {getChapterName(event.chapterId)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-white/90 text-sm mb-4">{event.description}</p>
                    <div className="flex items-center text-white/80 text-sm mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </div>
                    <div className="mt-auto">
                      <a 
                        href={event.registerLink}
                        className="inline-flex items-center text-sm font-medium bg-white text-gray-800 px-4 py-2 rounded hover:bg-white/90 transition-colors"
                      >
                        Registrarse
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* All events button */}
        <div className="flex justify-center mt-10">
          <a 
            href="/events"
            className="btn-outline"
          >
            Ver calendario completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;