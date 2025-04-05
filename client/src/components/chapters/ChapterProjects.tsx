import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../data/mockData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users, CheckCircle, Clock } from 'lucide-react';

interface ChapterProjectsProps {
  projects: Project[];
  colorClass: string;
  bgColorClass: string;
}

const ChapterProjects: React.FC<ChapterProjectsProps> = ({ projects, colorClass, bgColorClass }) => {
  if (!projects || !projects.length) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 dark:text-gray-400">No hay proyectos activos para este capítulo actualmente.</p>
      </div>
    );
  }

  // Status badge configuration
  const statusConfig = {
    active: { label: 'Activo', icon: <Calendar className="h-4 w-4 mr-1" />, class: 'bg-green-500' },
    completed: { label: 'Completado', icon: <CheckCircle className="h-4 w-4 mr-1" />, class: 'bg-blue-500' },
    planned: { label: 'Planificado', icon: <Clock className="h-4 w-4 mr-1" />, class: 'bg-amber-500' }
  };

  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div key={project.id} className="glass-card rounded-xl p-6 transition-all hover:shadow-md">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              
              <div className="flex items-center mb-4">
                <Badge className={`flex items-center ${statusConfig[project.status].class}`}>
                  {statusConfig[project.status].icon}
                  {statusConfig[project.status].label}
                </Badge>
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
            
            <Link to={`/projects#${project.id}`}>
              <Button variant="outline" className={`border-2 ${colorClass.replace('text', 'border')}`}>
                Ver detalles
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChapterProjects;