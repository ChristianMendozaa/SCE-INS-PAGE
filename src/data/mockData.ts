
import { Lock, Server, Database, Calendar } from "lucide-react";

// Types
export interface Chapter {
  id: string;
  name: string;
  description: string;
  leader: string;
  colorClass: string;
  bgColorClass: string;
  icon: any;
  longDescription: string;
  researchLines: string[];
  events: Event[];
  image: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  chapterId: string;
  location: string;
  registerLink: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  email: string;
  whatsapp: string;
  calendarLink: string;
  image: string;
}

export interface Publication {
  id: string;
  title: string;
  type: "paper" | "presentation" | "article";
  authors: string[];
  chapterId: string;
  fileLink: string;
  date: string;
  abstract: string;
}

export interface News {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  content: string;
  chapterId: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
}

// Mock Data
export const chapters: Chapter[] = [
  {
    id: "data-science",
    name: "Ciencia de Datos",
    description: "Investigación aplicada en inteligencia artificial, machine learning y análisis de grandes volúmenes de datos.",
    leader: "Ing. Oswaldo Figueroa",
    colorClass: "text-chapter-data-science",
    bgColorClass: "bg-chapter-data-science",
    icon: Database,
    longDescription: "El capítulo de Ciencia de Datos se enfoca en desarrollar investigaciones y aplicaciones innovadoras utilizando técnicas avanzadas de análisis de datos. Trabajamos en proyectos que combinan machine learning, inteligencia artificial y estadística para resolver problemas complejos.",
    researchLines: [
      "Aprendizaje profundo aplicado a visión por computador",
      "Procesamiento de lenguaje natural para análisis de textos académicos",
      "Análisis predictivo en datos de salud",
      "Modelos generativos y su aplicación en diseño"
    ],
    events: [
      {
        id: "ds-workshop-1",
        title: "Workshop: Introducción a Python para Data Science",
        date: "2023-10-15",
        description: "Taller práctico para aprender los fundamentos de Python aplicados a ciencia de datos.",
        chapterId: "data-science",
        location: "Laboratorio 305, Edificio San Pablo",
        registerLink: "#register"
      },
      {
        id: "ds-conference-1",
        title: "Conferencia: Big Data en Latinoamérica",
        date: "2023-11-05",
        description: "Análisis del estado actual y futuro del Big Data en el contexto latinoamericano.",
        chapterId: "data-science",
        location: "Auditorio Principal UCB",
        registerLink: "#register"
      }
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: "security",
    name: "Seguridad de Información",
    description: "Estudio de vulnerabilidades, amenazas y soluciones para la protección de datos y sistemas informáticos.",
    leader: "Ing. Lourdes Peredo",
    colorClass: "text-chapter-security",
    bgColorClass: "bg-chapter-security",
    icon: Lock,
    longDescription: "El capítulo de Seguridad de Información se dedica a investigar y desarrollar soluciones para proteger sistemas informáticos y datos sensibles. Trabajamos en identificación de vulnerabilidades, desarrollo de protocolos de seguridad y educación en ciberseguridad.",
    researchLines: [
      "Criptografía aplicada a blockchain",
      "Seguridad en aplicaciones móviles",
      "Ethical hacking y análisis de vulnerabilidades",
      "Protección de infraestructuras críticas"
    ],
    events: [
      {
        id: "sec-workshop-1",
        title: "Hackathon de Ciberseguridad",
        date: "2023-09-20",
        description: "Competencia de 48 horas para encontrar y solucionar vulnerabilidades en sistemas reales.",
        chapterId: "security",
        location: "Campus UCB",
        registerLink: "#register"
      },
      {
        id: "sec-conference-1",
        title: "Conferencia: Amenazas Emergentes en Ciberseguridad",
        date: "2023-10-10",
        description: "Análisis de las nuevas amenazas en el panorama de la seguridad informática.",
        chapterId: "security",
        location: "Auditorio B, Edificio San Pablo",
        registerLink: "#register"
      }
    ],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: "business",
    name: "Tecnología Empresarial",
    description: "Aplicación de soluciones tecnológicas innovadoras en el ámbito empresarial y emprendedor.",
    leader: "Ing. Lucero Yáñez",
    colorClass: "text-chapter-business",
    bgColorClass: "bg-chapter-business",
    icon: Calendar,
    longDescription: "El capítulo de Tecnología Empresarial investiga cómo las soluciones digitales transforman los negocios. Trabajamos en la intersección entre tecnología e innovación empresarial, desarrollando proyectos que optimizan procesos y crean valor.",
    researchLines: [
      "Transformación digital en PYMES",
      "Fintech y nuevos modelos de negocio",
      "ERP y optimización de procesos",
      "Marketing digital e inteligencia de negocios"
    ],
    events: [
      {
        id: "bus-workshop-1",
        title: "Seminario: Startups Tecnológicas",
        date: "2023-11-15",
        description: "Metodologías para la creación y desarrollo de startups basadas en tecnología.",
        chapterId: "business",
        location: "Centro de Emprendimiento UCB",
        registerLink: "#register"
      },
      {
        id: "bus-conference-1",
        title: "Conferencia: Blockchain en Finanzas",
        date: "2023-12-05",
        description: "Aplicaciones prácticas de blockchain en el sector financiero boliviano.",
        chapterId: "business",
        location: "Auditorio Principal UCB",
        registerLink: "#register"
      }
    ],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: "systems",
    name: "Sistemas, Hardware & Software",
    description: "Desarrollo e integración de componentes de hardware y software para crear soluciones tecnológicas completas.",
    leader: "Ing. Ángel Ávila",
    colorClass: "text-chapter-systems",
    bgColorClass: "bg-chapter-systems",
    icon: Server,
    longDescription: "El capítulo de Sistemas, Hardware & Software se enfoca en el desarrollo e integración de componentes tecnológicos. Investigamos arquitecturas de sistemas, diseño de hardware, desarrollo de software y su interacción para crear soluciones tecnológicas completas y eficientes.",
    researchLines: [
      "Desarrollo de sistemas embebidos",
      "Arquitecturas de software distribuido",
      "IoT y redes de sensores",
      "Ingeniería de software avanzada"
    ],
    events: [
      {
        id: "sys-workshop-1",
        title: "Taller: Programación de Microcontroladores",
        date: "2023-10-25",
        description: "Introducción práctica a la programación de Arduino y ESP32 para proyectos IoT.",
        chapterId: "systems",
        location: "Laboratorio 201, Edificio San Pablo",
        registerLink: "#register"
      },
      {
        id: "sys-conference-1",
        title: "Charla: Arquitecturas de Software Modernas",
        date: "2023-11-20",
        description: "Principios de diseño y patrones en arquitecturas de software contemporáneas.",
        chapterId: "systems",
        location: "Sala de Conferencias, Biblioteca UCB",
        registerLink: "#register"
      }
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }
];

export const allEvents: Event[] = chapters.flatMap(chapter => 
  chapter.events.map(event => ({
    ...event,
    chapterId: chapter.id
  }))
);

export const team: TeamMember[] = [
  {
    id: "member-1",
    name: "Dr. Roberto García",
    position: "Presidente",
    email: "roberto.garcia@example.com",
    whatsapp: "+59177777777",
    calendarLink: "#calendar",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: "member-2",
    name: "Ing. María López",
    position: "Vicepresidente",
    email: "maria.lopez@example.com",
    whatsapp: "+59177777778",
    calendarLink: "#calendar",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    id: "member-3",
    name: "Lic. Pedro Ramírez",
    position: "Secretario General",
    email: "pedro.ramirez@example.com",
    whatsapp: "+59177777779",
    calendarLink: "#calendar",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    id: "member-4",
    name: "Dra. Laura Sánchez",
    position: "Tesorera",
    email: "laura.sanchez@example.com",
    whatsapp: "+59177777780",
    calendarLink: "#calendar",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
  },
  {
    id: "member-5",
    name: "Ing. José Torres",
    position: "Director de Comunicación",
    email: "jose.torres@example.com",
    whatsapp: "+59177777781",
    calendarLink: "#calendar",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  }
];

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Análisis comparativo de algoritmos de machine learning para la predicción de rendimiento académico",
    type: "paper",
    authors: ["Ana Rodríguez", "Carlos Mendoza"],
    chapterId: "data-science",
    fileLink: "#file",
    date: "2023-05-15",
    abstract: "Este estudio compara diversos algoritmos de machine learning para predecir el rendimiento académico de estudiantes universitarios basado en factores socioeconómicos y académicos."
  },
  {
    id: "pub-2",
    title: "Implementación de blockchain para la seguridad de registros médicos",
    type: "paper",
    authors: ["Carlos Mendoza", "Luis González"],
    chapterId: "security",
    fileLink: "#file",
    date: "2023-04-10",
    abstract: "Esta investigación presenta una implementación de tecnología blockchain para asegurar la integridad y privacidad de registros médicos electrónicos."
  },
  {
    id: "pub-3",
    title: "Transformación digital en PYMES bolivianas: desafíos y oportunidades",
    type: "article",
    authors: ["Juan Pérez", "María López"],
    chapterId: "business",
    fileLink: "#file",
    date: "2023-06-22",
    abstract: "Este artículo analiza el estado actual de la transformación digital en pequeñas y medianas empresas bolivianas, identificando principales obstáculos y oportunidades de mejora."
  },
  {
    id: "pub-4",
    title: "Arquitectura de microservicios para sistemas de gestión educativa",
    type: "presentation",
    authors: ["Luis González", "Roberto García"],
    chapterId: "systems",
    fileLink: "#file",
    date: "2023-03-30",
    abstract: "Esta presentación describe una arquitectura basada en microservicios para sistemas de gestión educativa, discutiendo ventajas y consideraciones de implementación."
  },
  {
    id: "pub-5",
    title: "Detección de fake news utilizando procesamiento de lenguaje natural",
    type: "paper",
    authors: ["Ana Rodríguez", "Pedro Ramírez"],
    chapterId: "data-science",
    fileLink: "#file",
    date: "2023-02-15",
    abstract: "Este paper presenta un modelo de NLP para la detección automática de noticias falsas en español, con un enfoque en el contexto latinoamericano."
  },
  {
    id: "pub-6",
    title: "Análisis de vulnerabilidades en aplicaciones móviles bancarias en Bolivia",
    type: "article",
    authors: ["Carlos Mendoza", "Laura Sánchez"],
    chapterId: "security",
    fileLink: "#file",
    date: "2023-01-20",
    abstract: "Este estudio evalúa las vulnerabilidades de seguridad presentes en aplicaciones móviles de instituciones financieras bolivianas, proponiendo mejores prácticas."
  }
];

export const news: News[] = [
  {
    id: "news-1",
    title: "La sociedad Norbert Wiener participa en congreso internacional de IA",
    date: "2023-06-15",
    summary: "Representantes de nuestra sociedad presentaron investigaciones en el Congreso Internacional de Inteligencia Artificial celebrado en Buenos Aires.",
    image: "https://images.unsplash.com/photo-1582112251217-52c1067a679f",
    content: "Los días 10 al 12 de junio, una delegación de estudiantes y docentes de nuestra Sociedad Científica participó activamente en el prestigioso Congreso Internacional de Inteligencia Artificial (CIIA 2023) celebrado en Buenos Aires, Argentina. Durante el evento, se presentaron tres investigaciones desarrolladas por miembros de nuestro capítulo de Ciencia de Datos, obteniendo reconocimiento por parte de expertos internacionales.",
    chapterId: "data-science"
  },
  {
    id: "news-2",
    title: "Exitoso hackathon de ciberseguridad organizado por la Sociedad",
    date: "2023-05-20",
    summary: "Más de 50 estudiantes participaron en el hackathon de ciberseguridad organizado por nuestro capítulo de Seguridad de Información.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    content: "El pasado fin de semana, nuestro capítulo de Seguridad de Información organizó exitosamente un hackathon de 48 horas enfocado en ciberseguridad. El evento, que contó con la participación de más de 50 estudiantes de diversas universidades de La Paz, se centró en la identificación y remediación de vulnerabilidades en sistemas web. Los equipos ganadores recibieron premios patrocinados por empresas líderes del sector tecnológico boliviano.",
    chapterId: "security"
  },
  {
    id: "news-3",
    title: "Convenio firmado con Microsoft para capacitación estudiantil",
    date: "2023-04-10",
    summary: "La Sociedad Científica Norbert Wiener firmó un importante convenio con Microsoft para facilitar capacitaciones y certificaciones a estudiantes de la UCB.",
    image: "https://images.unsplash.com/photo-1574887427561-d3d5d58c9273",
    content: "Nos complace anunciar la firma de un convenio estratégico con Microsoft Bolivia, que permitirá a los miembros de nuestra Sociedad Científica acceder a programas de capacitación especializados y obtener certificaciones profesionales con descuentos significativos. Este acuerdo, gestionado por nuestro capítulo de Tecnología Empresarial, beneficiará a estudiantes de todas las áreas de ingeniería de sistemas de la UCB.",
    chapterId: "business"
  }
];

export const values: Value[] = [
  {
    id: "value-1",
    title: "Excelencia académica",
    description: "Buscamos constantemente el más alto nivel de calidad en nuestras investigaciones y publicaciones, siguiendo rigurosos estándares científicos."
  },
  {
    id: "value-2",
    title: "Innovación",
    description: "Promovemos el pensamiento creativo y la búsqueda de soluciones originales a los problemas tecnológicos contemporáneos."
  },
  {
    id: "value-3",
    title: "Colaboración",
    description: "Creemos en el trabajo en equipo y la cooperación interdisciplinaria como pilares fundamentales para el avance científico."
  },
  {
    id: "value-4",
    title: "Ética profesional",
    description: "Todas nuestras actividades se rigen por estrictos principios éticos, priorizando la responsabilidad social y el uso adecuado de la tecnología."
  },
  {
    id: "value-5",
    title: "Inclusión",
    description: "Promovemos un ambiente diverso e inclusivo, donde todos los estudiantes pueden desarrollar su potencial independientemente de su origen o condición."
  }
];

export const aboutInfo = {
  mission: "Fomentar la investigación científica y el desarrollo tecnológico entre los estudiantes de Ingeniería de Sistemas de la Universidad Católica Boliviana, promoviendo la aplicación de conocimientos teóricos en soluciones prácticas que respondan a necesidades de la sociedad boliviana.",
  vision: "Ser reconocidos como un referente nacional en investigación aplicada en tecnologías de la información, formando profesionales con sólidas competencias científicas y compromiso social, capaces de impulsar la innovación tecnológica en Bolivia.",
  history: "La Sociedad Científica Estudiantil Norbert Wiener fue fundada en 2005 por un grupo de estudiantes y docentes comprometidos con elevar el nivel de investigación en la carrera de Ingeniería de Sistemas. A lo largo de los años, ha crecido hasta convertirse en una organización estructurada con capítulos especializados, publicaciones reconocidas y vínculos con entidades académicas internacionales.",
};

export const membershipInfo = {
  requirements: [
    "Ser estudiante activo de la carrera de Ingeniería de Sistemas de la UCB.",
    "Mantener un promedio general mínimo de 70/100.",
    "Completar el formulario de solicitud y presentar carta de motivación.",
    "Aprobar entrevista con directivos del capítulo de interés.",
    "Comprometerse a dedicar al menos 5 horas semanales a actividades de la sociedad."
  ],
  benefits: [
    "Participación en proyectos de investigación aplicada con reconocimiento académico.",
    "Acceso a seminarios y talleres especializados exclusivos para miembros.",
    "Oportunidades para publicar en revistas científicas y participar en congresos.",
    "Mentoría de docentes investigadores y profesionales del sector.",
    "Red de contactos con empresas tecnológicas y organizaciones científicas.",
    "Posibilidad de obtener becas para eventos nacionales e internacionales."
  ],
  responsibilities: [
    "Participar activamente en proyectos de investigación del capítulo.",
    "Asistir a reuniones periódicas y eventos organizados por la sociedad.",
    "Contribuir en la organización de actividades académicas.",
    "Mantener la confidencialidad de investigaciones en desarrollo.",
    "Representar dignamente a la sociedad en eventos externos."
  ]
};
