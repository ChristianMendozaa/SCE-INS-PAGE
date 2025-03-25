
import { useState, useEffect, useRef } from 'react';
import { Check, FileText, Download } from 'lucide-react';

const MembershipSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Membresía</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Los miembros completos pueden participar directamente en la propuesta, planificación,
            organización y desarrollo de proyectos y actividades de investigación. Además, podrán
            participar en eventos a los que la SCE-SIS sea invitada como representante oficial y
            ser coautores en la edición semestral de la revista de la carrera. Como miembros, se
            espera participación y compromiso con nuestros eventos, misión y visión.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Requirements */}
          <div
            className={`glass-card rounded-xl p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="text-xl font-semibold mb-6 inline-flex items-center">
              <div className="bg-chapter-data-science/10 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                <FileText className="h-5 w-5 text-chapter-data-science" />
              </div>
              Requisitos de afiliación
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-chapter-data-science/10 text-chapter-data-science mr-3 flex-shrink-0 mt-0.5">
                  1
                </span>
                <span className="text-gray-600 dark:text-gray-300">Ser estudiante regular de la carrera</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-chapter-data-science/10 text-chapter-data-science mr-3 flex-shrink-0 mt-0.5">
                  2
                </span>
                <span className="text-gray-600 dark:text-gray-300">Llenar el formulario de inscripción</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-chapter-data-science/10 text-chapter-data-science mr-3 flex-shrink-0 mt-0.5">
                  3
                </span>
                <span className="text-gray-600 dark:text-gray-300">Firmar el compromiso de cumplimiento</span>
              </li>
            </ul>
          </div>

          {/* Benefits */}
          <div
            className={`glass-card rounded-xl p-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="text-xl font-semibold mb-6 inline-flex items-center">
              <div className="bg-chapter-security/10 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                <Check className="h-5 w-5 text-chapter-security" />
              </div>
              Beneficios
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-chapter-security/10 text-chapter-security mr-3 flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-gray-600 dark:text-gray-300">Capacitación y actualización en las áreas de especialidad de los capítulos</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-chapter-security/10 text-chapter-security mr-3 flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-gray-600 dark:text-gray-300">Integrar grupos de trabajo motivados por el crecimiento y la innovación</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-chapter-security/10 text-chapter-security mr-3 flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-gray-600 dark:text-gray-300">Acceder a nexos con empresas</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-chapter-security/10 text-chapter-security mr-3 flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-gray-600 dark:text-gray-300">Ampliar tu campo de experiencia con la obtención de méritos por actividades</span>
              </li>
            </ul>
          </div>

          {/* Responsibilities */}
          <div
            className={`glass-card rounded-xl p-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="text-xl font-semibold mb-6 inline-flex items-center">
              <div className="bg-chapter-business/10 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                <FileText className="h-5 w-5 text-chapter-business" />
              </div>
              Responsabilidades
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-chapter-business/10 text-chapter-business mr-3 flex-shrink-0 mt-0.5">
                  1
                </span>
                <span className="text-gray-600 dark:text-gray-300">Participar en los talleres y/o capacitaciones del capítulo</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-chapter-business/10 text-chapter-business mr-3 flex-shrink-0 mt-0.5">
                  2
                </span>
                <span className="text-gray-600 dark:text-gray-300">Participar activamente en las actividades de investigación aplicada</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Activities and events */}
        <div
          className={`mt-12 glass-card rounded-xl p-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="text-xl font-semibold mb-4">Actividades y eventos</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Los coordinadores de cada capítulo planifican las actividades y eventos que llevarán a cabo
            para promover la investigación y el intercambio de conocimientos. Esto puede incluir conferencias,
            talleres, publicaciones, proyectos, etc. Se plantea un catálogo de líneas de investigación en
            base al cual se pueden elegir áreas de acuerdo con los requerimientos, problemas y necesidades identificadas.
          </p>
        </div>

        {/* Action buttons */}
        <div
          className={`mt-12 flex flex-col md:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <a
            href="https://forms.gle/s7GEeWe21oNbeYAQ8" // reemplaza con el link real
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full md:w-auto"
          >
            Formulario de inscripción
          </a>
          <a
            href="/documentos/SCE Acuerdo de Confidencialidad 2025 v2.pdf" // asegúrate que el PDF esté en esa ruta
            download
            className="btn-outline flex items-center w-full md:w-auto"
          >
            <Download className="mr-2 h-4 w-4" />
            Descargar compromiso (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
