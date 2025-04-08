import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProjectProposalSection from '../components/home/ProjectProposalSection';
import { useState, useEffect } from 'react';
import { projects, chapters } from '../data/mockData';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

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

  // Status badge configuration
  const statusConfig = {
    active: { label: 'Activo', icon: <Calendar className="h-4 w-4 mr-1" />, class: 'bg-green-500' },
    completed: { label: 'Completado', icon: <CheckCircle className="h-4 w-4 mr-1" />, class: 'bg-blue-500' },
    planned: { label: 'Planificado', icon: <Clock className="h-4 w-4 mr-1" />, class: 'bg-amber-500' }
  };

  // Filter projects based on status
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.status === activeFilter);

  // Find chapter info for each project
  const getChapterInfo = (chapterId) => {
    return chapters.find(chapter => chapter.id === chapterId) || null;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 overflow-x-hidden">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <div className="pt-24 pb-8 px-4 md:px-8 bg-white dark:bg-gray-900">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Proyectos</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Explora los proyectos activos de la SCE y presenta tus ideas para colaborar en nuevas iniciativas.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Button
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('all')}
                className="min-w-24"
              >
                Todos
              </Button>
              <Button
                variant={activeFilter === 'active' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('active')}
                className="min-w-24"
              >
                Activos
              </Button>
              <Button
                variant={activeFilter === 'planned' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('planned')}
                className="min-w-24"
              >
                Planificados
              </Button>
              <Button
                variant={activeFilter === 'completed' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('completed')}
                className="min-w-24"
              >
                Completados
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const chapterInfo = getChapterInfo(project.chapterId);
              return (
                <div key={project.id} id={project.id} className="glass-card rounded-xl p-6 transition-all hover:shadow-md">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className={`flex items-center ${statusConfig[project.status].class}`}>
                          {statusConfig[project.status].icon}
                          {statusConfig[project.status].label}
                        </Badge>

                        {/*{chapterInfo && (
                          <Link to={`/chapter/${chapterInfo.id}`}>
                            <Badge className={`flex items-center ${chapterInfo.bgColorClass}`}>
                              {chapterInfo.name}
                            </Badge>
                          </Link>
                        )} */}
                      </div>
                    </div>

                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{project.teamSize} miembros</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    {project.needsMembers ? (
                      <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-medium">
                        <span>¡Buscamos colaboradores!</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-amber-600 dark:text-amber-400 text-sm font-medium">
                        <span>Equipo completo</span>
                      </div>
                    )}

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5Ty1cZkFdtuFwLpT6RfmkU3f1ONH2Fax01u89IuDMV7KqRQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">Postular al proyecto</Button>
                    </a>

                  </div>
                </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No hay proyectos disponibles con el filtro seleccionado.
              </p>
            </div>
          )}
        </div>

        <ProjectProposalSection />
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
