// ─────────────────────────────────────────────
//  Personal info
// ─────────────────────────────────────────────
export const personalInfo = {
  name: 'Domingo Ugas',
  role: 'AI FullStack Developer',
  stack: 'MEVN Stack · Python · AI & Data Science',
  location: 'Madrid, España',
  github: 'https://github.com/ugasdomingo',
  twitter: 'https://twitter.com/ugasdomingo',
  linkedin: 'https://www.linkedin.com/in/ugasdomingo/',
  avatar: 'https://avatars.githubusercontent.com/u/89316506?v=4',
}

// ─────────────────────────────────────────────
//  Proyectos recientes terminados (galería hero)
// ─────────────────────────────────────────────
export const recentSites = [
  {
    name: 'Silicity Campus',
    description: 'Plataforma educativa completa',
    url: 'https://silicitycampus.com',
    screenshot: 'https://api.microlink.io/?url=https://silicitycampus.com&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    name: 'Lucia Díaz',
    description: 'App web full-stack personalizada',
    url: 'https://luciadiaz.es',
    screenshot: 'https://api.microlink.io/?url=https://luciadiaz.es&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    name: 'DigiNode',
    description: 'Plataforma de gestión empresarial',
    url: 'https://midiginode.com',
    screenshot: 'https://api.microlink.io/?url=https://midiginode.com&screenshot=true&meta=false&embed=screenshot.url',
  },
]

// ─────────────────────────────────────────────
//  Skills
// ─────────────────────────────────────────────
export const skills = [
  {
    label: 'Frontend',
    icon: '🎨',
    accent: false,
    items: ['Vue.js 3', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SCSS/SASS', 'Vite'],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    accent: false,
    items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'TypeScript'],
  },
  {
    label: 'Herramientas',
    icon: '🔧',
    accent: false,
    items: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Postman'],
  },
  {
    label: 'Aprendiendo',
    icon: '🧠',
    accent: true,
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning', 'Deep Learning', 'NLP', 'Jupyter'],
  },
]

// ─────────────────────────────────────────────
//  Projects
//  categories: fullstack | client | datascience
// ─────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    name: 'DigiEvolucion',
    description:
      'Plataforma de gestión empresarial full-stack construida con el stack MEVN. Arquitectura moderna con Vue.js 3, TypeScript, Vite y SASS en el frontend; Node.js y MongoDB en el backend.',
    tags: ['Vue.js', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'SASS', 'Vite'],
    url: 'https://digievolucion-api.vercel.app',
    github: 'https://github.com/ugasdomingo/digievolucion',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 2,
    name: 'Silicit',
    description:
      'Aplicación web full-stack con arquitectura desacoplada: frontend en Vue.js + TypeScript y backend API REST. Desplegada en Vercel.',
    tags: ['Vue.js', 'TypeScript', 'CSS', 'API REST'],
    url: 'https://silicitapi.vercel.app',
    github: 'https://github.com/ugasdomingo/silicit',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 3,
    name: 'Lucia Diaz App',
    description:
      'Aplicación web completa para luciadiaz.es. Frontend en Vue.js 3 con SCSS y backend en Node.js, Express y MongoDB con TypeScript. El proyecto más activo del portfolio (76+ commits).',
    tags: ['Vue.js', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'SCSS'],
    url: 'https://luciadiaz-client.vercel.app',
    github: 'https://github.com/ugasdomingo/luciadiaz-client',
    category: 'fullstack',
    featured: true,
  },
  {
    id: 4,
    name: 'DigiNode',
    description:
      'Nueva generación de DigiEmpresas con arquitectura totalmente desacoplada: API REST independiente en Node.js y frontend Vue.js desplegados por separado.',
    tags: ['Vue.js', 'Node.js', 'JavaScript', 'REST API'],
    url: 'https://diginode-client.vercel.app',
    github: 'https://github.com/ugasdomingo/diginode-client',
    category: 'fullstack',
    featured: false,
  },
  {
    id: 5,
    name: 'Fusion Force',
    description:
      'Sitio web corporativo para Fusion Force SL. Diseñado y desarrollado con Vue.js y desplegado en Vercel.',
    tags: ['Vue.js', 'JavaScript', 'CSS'],
    url: 'https://fusion-force.vercel.app',
    github: 'https://github.com/ugasdomingo/fusion-force',
    category: 'client',
    featured: false,
  },
  {
    id: 6,
    name: 'Global Datawork',
    description:
      'Sitio web corporativo para Global Datawork. Desarrollado con Vue.js, enfocado en diseño limpio y rendimiento.',
    tags: ['Vue.js', 'JavaScript', 'CSS'],
    url: 'https://global-dw.vercel.app',
    github: 'https://github.com/ugasdomingo/global-dw',
    category: 'client',
    featured: false,
  },
  {
    id: 7,
    name: 'Ibercondor',
    description:
      'Sitio web empresarial para Ibercondor. Desarrollado con Vue.js y desplegado en Vercel.',
    tags: ['Vue.js', 'JavaScript', 'CSS'],
    url: 'https://ibercondor.vercel.app',
    github: 'https://github.com/ugasdomingo/ibercondor',
    category: 'client',
    featured: false,
  },
  {
    id: 8,
    name: "Maria D'Alessio",
    description:
      'Sitio web personal. El proyecto más reciente del portfolio, desarrollado con Vue.js y desplegado en Vercel.',
    tags: ['Vue.js', 'JavaScript'],
    url: 'https://maria-dalessio.vercel.app',
    github: 'https://github.com/ugasdomingo/maria_dalessio',
    category: 'client',
    featured: false,
  },
  {
    id: 9,
    name: 'Monthly Sales Analyzer',
    description:
      'Análisis de datos de ventas mensuales utilizando Python y Pandas. Proyecto práctico del bootcamp de Data Science de 4Geeks Academy.',
    tags: ['Python', 'Pandas', 'Data Analysis', 'Jupyter Notebook'],
    url: null,
    github: 'https://github.com/ugasdomingo/monthly-sales-analyzer-project',
    category: 'datascience',
    featured: false,
  },
  {
    id: 10,
    name: 'Data Clean-up con Pandas',
    description:
      'Proyecto de limpieza y manipulación de datos con Pandas. Cubre técnicas esenciales de preprocesamiento para ciencia de datos.',
    tags: ['Python', 'Pandas', 'Data Cleaning', 'Jupyter Notebook'],
    url: null,
    github: 'https://github.com/ugasdomingo/data-clean-up-pandas-for-beginners-project',
    category: 'datascience',
    featured: false,
  },
]

// ─────────────────────────────────────────────
//  Formación — Bootcamp header
// ─────────────────────────────────────────────
export const bootcampInfo = {
  school: '4Geeks Academy',
  program: 'Data Science & Machine Learning',
  startDate: 'Marzo 2026',
  endDate: 'Julio 2026',
  duration: '18 semanas',
  url: 'https://4geeksacademy.com/en/career-programs/data-science-ml',
}

// ─────────────────────────────────────────────
//  Competencias que genera el bootcamp
// ─────────────────────────────────────────────
export const bootcampCompetencies = [
  {
    icon: '📊',
    title: 'Análisis de Datos',
    description:
      'Manipulación, limpieza y análisis exploratorio de grandes datasets con Pandas y NumPy. Identificación de patrones y outliers.',
  },
  {
    icon: '📐',
    title: 'Estadística & Matemáticas',
    description:
      'Probabilidad, estadística descriptiva, álgebra lineal y cálculo aplicados directamente al diseño de modelos predictivos.',
  },
  {
    icon: '🤖',
    title: 'Machine Learning',
    description:
      'Algoritmos supervisados y no supervisados: regresión, clasificación, clustering, Random Forest, XGBoost y KNN.',
  },
  {
    icon: '🧠',
    title: 'Deep Learning',
    description:
      'Redes neuronales artificiales, RNNs para datos secuenciales, Transfer Learning y técnicas de regularización avanzadas.',
  },
  {
    icon: '💬',
    title: 'NLP',
    description:
      'Procesamiento de lenguaje natural: clasificadores de texto, análisis de sentimiento y modelos de lenguaje básicos.',
  },
  {
    icon: '🔌',
    title: 'Data Engineering',
    description:
      'Web scraping, integración de APIs públicas y construcción de pipelines de datos robustos para alimentar modelos.',
  },
  {
    icon: '⭐',
    title: 'Sistemas de Recomendación',
    description:
      'Filtrado colaborativo, content-based filtering e implementación de sistemas personalizados de recomendación.',
  },
  {
    icon: '🚀',
    title: 'Deploy de Modelos',
    description:
      'Despliegue de modelos ML en producción usando Flask y Streamlit, con integración en plataformas cloud.',
  },
]

// ─────────────────────────────────────────────
//  Historial educativo
// ─────────────────────────────────────────────
export const education = [
  {
    title: 'Data Science & Machine Learning',
    school: '4Geeks Academy',
    period: 'Marzo 2026 — Julio 2026',
    type: 'Bootcamp',
    status: 'current',
    url: 'https://4geeksacademy.com/en/career-programs/data-science-ml',
    description: 'Bootcamp intensivo de 18 semanas. Python, ML, Deep Learning, NLP y deploy de modelos.',
  },
  {
    title: 'FullStack Development',
    school: 'Platzi',
    period: '2021 — 2024',
    type: 'Online',
    status: 'completed',
    url: 'https://platzi.com',
    description: 'Formación autodidacta en desarrollo web: JavaScript, Vue.js, Node.js, bases de datos y más.',
  },
  {
    title: 'Técnico Superior en Administración · Mención Marketing',
    school: 'Instituto Técnico',
    period: 'Venezuela',
    type: 'Técnico Superior',
    status: 'completed',
    url: null,
    description: 'Formación en gestión empresarial, marketing estratégico y administración comercial.',
  },
  {
    title: 'Técnico Superior en Contabilidad',
    school: 'Instituto Técnico',
    period: 'Venezuela',
    type: 'Técnico Superior',
    status: 'completed',
    url: null,
    description: 'Formación en contabilidad financiera, análisis de estados financieros y gestión fiscal.',
  },
]
