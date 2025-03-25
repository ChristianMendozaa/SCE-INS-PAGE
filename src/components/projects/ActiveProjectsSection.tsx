
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  chapters: string[];
  teamSize: number;
  needsMembers: boolean;
  chapterColors: Record<string, string>;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Sistema de Monitoreo IoT',
    description: 'Desarrollo de una plataforma para monitorear dispositivos IoT en tiempo real con dashboard personalizable.',
    chapters: ['Hardware y Software', 'Ciencia de datos'],
    teamSize: 4,
    needsMembers: true,
    chapterColors: {
      'Hardware y Software': 'bg-blue-500',
      'Ciencia de datos': 'bg-teal-500',
      'Seguridad de Sistemas': 'bg-orange-500',
      'Tecnologias empresariales': 'bg-green-500'
    }
  },
  {
    id: '2',
    title: 'Análisis Predictivo de Ventas',
    description: 'Implementación de algoritmos de machine learning para predecir tendencias de ventas para pequeñas empresas.',
    chapters: ['Ciencia de datos', 'Tecnologias empresariales'],
    teamSize: 5,
    needsMembers: false,
    chapterColors: {
      'Hardware y Software': 'bg-blue-500',
      'Ciencia de datos': 'bg-teal-500',
      'Seguridad de Sistemas': 'bg-orange-500',
      'Tecnologias empresariales': 'bg-green-500'
    }
  },
  {
    id: '3',
    title: 'Plataforma de Seguridad Web',
    description: 'Desarrollo de herramientas para auditoría y mejora de la seguridad en aplicaciones web.',
    chapters: ['Seguridad de Sistemas', 'Hardware y Software'],
    teamSize: 3,
    needsMembers: true,
    chapterColors: {
      'Hardware y Software': 'bg-blue-500',
      'Ciencia de datos': 'bg-teal-500',
      'Seguridad de Sistemas': 'bg-orange-500',
      'Tecnologias empresariales': 'bg-green-500'
    }
  },
];

const ActiveProjectsSection = () => {
  const handleApply = (projectId: string) => {
    console.log(`Aplicando al proyecto: ${projectId}`);
    // Aquí iría la lógica para postularse al proyecto
    alert(`Tu solicitud para unirte al proyecto ha sido enviada. Te contactaremos pronto.`);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Activos</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explora los proyectos en los que actualmente estamos trabajando y únete a aquellos que necesiten colaboradores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="h-full flex flex-col transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="flex flex-wrap gap-2 mt-2">
                  {project.chapters.map((chapter) => (
                    <Badge key={chapter} className={`${project.chapterColors[chapter]} text-white`}>
                      {chapter}
                    </Badge>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <Users className="mr-2 h-4 w-4" />
                  <span>{project.teamSize} miembros en el equipo</span>
                </div>
              </CardContent>
              <CardFooter className="pt-0 flex justify-between items-center">
                {project.needsMembers ? (
                  <div className="flex flex-col w-full gap-2">
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                      ¡Buscamos colaboradores!
                    </p>
                    <Button 
                      onClick={() => handleApply(project.id)} 
                      className="w-full"
                    >
                      Postularme
                    </Button>
                  </div>
                ) : (
                  <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">
                    Equipo completo
                  </p>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActiveProjectsSection;
