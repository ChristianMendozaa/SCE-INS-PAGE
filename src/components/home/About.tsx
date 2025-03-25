
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github } from 'lucide-react';

const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-200/30 dark:via-gray-800/30 to-transparent"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src="/images/SCE-LOGO-V4.png" 
              alt="SCE Sistemas Logo" 
              className={`w-32 h-32 transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            />
          </div>
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Sociedad Científica Estudiantil de Ingeniería de Sistemas 🐧💻
          </h2>
          <p 
            className={`text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Bienvenido a la Sociedad Científica Estudiantil "Norbert Wiener" de la carrera 
            de Ingeniería de Sistemas de la UCB La Paz. Esta es nuestra página de bienvenida, 
            donde podrás aprender más acerca de nosotros.
          </p>
          <div 
            className={`w-20 h-1 bg-primary mx-auto rounded transition-all duration-700 delay-100 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            className={`glass-card rounded-xl p-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="text-xl font-semibold mb-4">Misión</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Promover y apoyar la investigación aplicada en cada área de especialización, 
              fomentar la colaboración, impulsar la innovación y generar resultados para 
              promover el rendimiento académico de los miembros y potenciar la calidad de 
              los estudiantes de la carrera.
            </p>
          </div>

          <div 
            className={`glass-card rounded-xl p-6 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="text-xl font-semibold mb-4">Visión</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Ser un programa de excelencia que equipe a estudiantes tutores y tutelados 
              con experiencia de primera mano de la nueva realidad colaborativa en nuestro rubro.
            </p>
          </div>

          <div 
            className={`glass-card rounded-xl p-6 md:col-span-2 lg:col-span-1 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="text-xl font-semibold mb-4">Los Capítulos</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Los estudiantes regulares podrán suscribirse a uno o más capítulos de investigación aplicada, 
              donde los docentes publicarán contenido de interés, se organizarán talleres y seminarios 
              de los que podrás formar parte. Asimismo, podrás incorporarte como miembro completo si 
              así lo deseas en un futuro.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-primary dark:text-primary-foreground">
                👉 Está abierta la convocatoria
              </span>
              <Link 
                to="/membership" 
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Formulario de inscripción
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link 
            to="/chapters" 
            className="btn-primary group inline-flex items-center"
          >
            Conocer capítulos
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div 
          className={`mt-12 glass-card rounded-xl p-6 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Código Fuente</h3>
          <div className="flex justify-center">
            <a 
              href="https://github.com/yourusername/norbert-wiener-hub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center"
            >
              <Github className="mr-2 h-5 w-5" />
              Ver en GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
