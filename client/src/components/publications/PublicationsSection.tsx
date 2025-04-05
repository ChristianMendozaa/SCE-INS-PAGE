
import { useState, useEffect, useRef } from 'react';
import { Search, Download, FileText, BookOpen, Presentation } from 'lucide-react';
import { publications, chapters } from '../../data/mockData';

type PublicationType = "all" | "paper" | "presentation" | "article";

const PublicationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [chapterFilter, setChapterFilter] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<PublicationType>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const getChapterColor = (chapterId: string) => {
    const chapter = chapters.find(c => c.id === chapterId);
    return chapter ? chapter.bgColorClass : '';
  };

  const getChapterName = (chapterId: string) => {
    const chapter = chapters.find(c => c.id === chapterId);
    return chapter ? chapter.name : '';
  };
  
  const filteredPublications = publications.filter(publication => {
    if (chapterFilter && publication.chapterId !== chapterFilter) {
      return false;
    }
    
    if (typeFilter !== "all" && publication.type !== typeFilter) {
      return false;
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        publication.title.toLowerCase().includes(query) ||
        publication.authors.some(author => author.toLowerCase().includes(query)) ||
        publication.abstract.toLowerCase().includes(query)
      );
    }
    
    return true;
  });
  
  const getPublicationTypeIcon = (type: string) => {
    switch (type) {
      case 'paper':
        return <FileText className="h-5 w-5" />;
      case 'presentation':
        return <Presentation className="h-5 w-5" />;
      case 'article':
        return <BookOpen className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };
  
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

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Publicaciones y Recursos</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Accede a papers, presentaciones y artículos desarrollados por miembros de nuestra sociedad.
          </p>
        </div>
        
        <div 
          className={`glass-card rounded-xl p-6 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Buscar por título, autor o contenido
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Buscar publicaciones..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="md:w-auto">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tipo de publicación
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setTypeFilter("all")}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    typeFilter === "all" 
                      ? 'bg-primary text-primary-foreground dark:text-gray-950' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => setTypeFilter("paper")}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    typeFilter === "paper" 
                      ? 'bg-primary text-primary-foreground dark:text-gray-950' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Papers
                </button>
                <button
                  onClick={() => setTypeFilter("presentation")}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    typeFilter === "presentation" 
                      ? 'bg-primary text-primary-foreground dark:text-gray-950' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Presentaciones
                </button>
                <button
                  onClick={() => setTypeFilter("article")}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    typeFilter === "article" 
                      ? 'bg-primary text-primary-foreground dark:text-gray-950' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Artículos
                </button>
              </div>
            </div>
            
            <div className="md:w-auto">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Filtrar por capítulo
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setChapterFilter(null)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    chapterFilter === null 
                      ? 'bg-primary text-primary-foreground dark:text-gray-950' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Todos
                </button>
                {chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => setChapterFilter(chapter.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      chapterFilter === chapter.id 
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
        
        {filteredPublications.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No se encontraron publicaciones con los filtros seleccionados.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredPublications.map((publication, index) => (
              <div 
                key={publication.id}
                className={`glass-card rounded-xl p-5 sm:p-6 transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="flex md:flex-col md:items-center md:w-1/12 mb-4 md:mb-0">
                    <div 
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${getChapterColor(publication.chapterId)}`}
                    >
                      {getPublicationTypeIcon(publication.type)}
                    </div>
                    <div className="ml-3 md:ml-0 md:mt-2 max-w-40">
                      <span className={`chapter-pill ${getChapterColor(publication.chapterId)} text-white inline-block text-center break-words hyphens-auto`}>
                        {getChapterName(publication.chapterId)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:w-11/12 md:pl-6">
                    <h3 className="text-xl font-semibold mb-2 break-words">{publication.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">{publication.abstract}</p>
                    
                    <div className="flex flex-wrap gap-3 text-xs sm:text-sm mb-4">
                      <div className="text-gray-500 dark:text-gray-400">
                        <span className="font-medium">Tipo:</span> {publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400">
                        <span className="font-medium">Autores:</span> {publication.authors.join(", ")}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400">
                        <span className="font-medium">Fecha:</span> {new Date(publication.date).toLocaleDateString('es-ES', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                    
                    <a 
                      href={publication.fileLink}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Descargar publicación
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;
