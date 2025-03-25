
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

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
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
                        ? `${chapter.bgColorClass.replace('-DEFAULT', '')} text-white dark:text-white` 
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
          <div className="space-y-6">
            {sortedEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`glass-card rounded-xl p-6 border-l-4 ${
                  getChapterColor(event.chapterId).replace('-bg', '')
                } transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center">
                  {/* Date column */}
                  <div className="md:w-1/6 mb-4 md:mb-0">
                    <div className="flex md:flex-col md:items-center">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-center w-20 md:w-24">
                        <span className="block text-2xl font-bold">
                          {new Date(event.date).getDate()}
                        </span>
                        <span className="block text-sm text-gray-500 capitalize">
                          {new Date(event.date).toLocaleDateString('es-ES', { month: 'short' })}
                        </span>
                      </div>
                      <div className="ml-4 md:ml-0 md:mt-2 max-w-40">
                        <span className={`chapter-pill ${getChapterColor(event.chapterId)} text-white inline-block text-center break-words hyphens-auto`}>
                          {getChapterName(event.chapterId)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Event details */}
                  <div className="md:w-4/6 md:pl-6">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action button */}
                  <div className="md:w-1/6 mt-4 md:mt-0 md:text-right">
                    <a 
                      href={event.registerLink}
                      className="btn-primary inline-flex items-center text-sm"
                    >
                      Registrarse
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* All events button */}
        <div className="flex justify-center mt-10">
          <a 
            href="#"
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
