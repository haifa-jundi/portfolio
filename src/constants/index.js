import { createDynamicAssetGetter } from '../utils';

const getAssetPath = createDynamicAssetGetter('');

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];


export const myProjects = [
    {
    title: 'Pandemic Data Exploration & Insights Dashboard',
    desc: 'A comprehensive data exploration and visualization dashboard that analyzes pandemic-related data to provide actionable insights and trends.',
    subdesc:
      'Built an interactive Tableau dashboard through data exploration of 85,000+ COVID-19 records including cases, deaths, and vaccination trends. Extracted insights such as regions with 20% higher case growth, vaccination uptake disparities, and mortality-to-vaccine correlations. The dashboard supports data-driven public health decisions, enabling stakeholders to monitor pandemic dynamics, optimize resource allocation, and evaluate the effectiveness of interventions.',
    href: 'https://public.tableau.com/app/profile/haifa.aljundi/viz/CovidDataDashboard_17585897809820/Dashboard1',
    texture: 'textures/project/Dashboard.mp4',
    logo: 'assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: 'assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Tableau',
        path: 'assets/icons8-tableau.png',
      },
      {
        id: 2,
        name: 'SQL',
        path: 'assets/icons8-sql.png',
      },
      {
        id: 3,
        name: 'Microsoft Excel',
        path: 'assets/icons8-microsoft-excel.png',
      },
    ],
  },
  {
    title: 'DiabetoAI - Diabetes Prediction System',
    desc: 'DiabetoAI is an innovative project that uses AI in predicting healthcare outcomes and preparing personalized healthcare plans per individual needs.',
    subdesc:
      'Uses six optimized machine learning models to analyze patient data and make accurate predictions. It offers personalized healthcare plans based on prediction results and generated summaries. The system also features a Health Record Assistant powered by IBM watsonx, utilizing Retrieval Augmented Generation (RAG) to retrieve and summarize reports for both patients and medical practitioners, accompanied by a chatbot for further assistance.',
    href: 'https://doi.org/10.5281/zenodo.14699621',
    texture: 'textures/project/project1.mp4',
    logo: 'assets/icons8-glucometer-96.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: 'assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Jupyter',
        path: 'assets/jupyter-logo.png',
      },
      {
        id: 2,
        name: 'Python',
        path: 'assets/python-logo.png',
      },
      {
        id: 3,
        name: 'HTML',
        path: 'assets/html-5-logo.png',
      },
      {
        id: 4,
        name: 'CSS',
        path: 'assets/css3-logo.png',
      },
      {
        id: 5,
        name: 'JavaScript',
        path: 'assets/javascript-logo.png',
      },
      {
        id: 6,
        name: 'MogoDB',
        path: 'assets/mongo-db-logo.png',
      },
    ],
  },
  {
    title: 'FutureFix - Predictive Maintenance System',
    desc: 'FutureFix is a predictive maintenance system, was developed using Huawei elevator dataset and LSTM models to forecast maintenance times with 95% accuracy, reducing downtime and enhancing operational efficiency.',
    subdesc:
      'By analyzing data on revolutions, humidity, and vibration, Futurefix utilizes LSTM models to predict maintenance needs. The integration of Gemini API provides contextual insights, ensuring timely interventions and minimizing elevator downtime.',
    href: 'https://github.com/HaifaAljundi/FutureFix.git',
    texture: 'textures/project/project2.mp4',
    logo: 'assets/maintenance-logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: 'assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Jupyter',
        path: 'assets/jupyter-logo.png',
      },
      {
        id: 2,
        name: 'Python',
        path: 'assets/python-logo.png',
      },
      {
        id: 3,
        name: 'HTML',
        path: 'assets/html-5-logo.png',
      },
      {
        id: 4,
        name: 'CSS',
        path: 'assets/css3-logo.png',
      },
      {
        id: 5,
        name: 'JavaScript',
        path: 'assets/javascript-logo.png',
      },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    texture: 'textures/project/project3.mp4',
    logo: 'assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: 'assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: 'assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: 'assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: 'assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 3,
    name: 'Property Finder',
    pos: 'Data & AI Engineering Intern',
    duration: 'May 2025 – October 2025',
    title: "Developed 90+ comprehensive SQL scripts in Amazon Redshift for advanced data extraction and analytics procedures, processing over 50M+ records with detailed step-by-step documentation.",
    icon: 'assets/propertyfinder.jpeg',
    animation: 'clapping',
  },
  {
    id: 1,
    name: 'Presidency of Digital Transformation Office',
    pos: 'Machine Learning Intern',
    duration: 'July 2024 – September 2024',
    title: "Collaborated with data scientists and engineers on AI-driven public sector projects, enhancing outcomes by developing machine learning models, refining algorithms for better accuracy and efficiency, and optimizing performance through data preprocessing, feature engineering, and model evaluation.",
    icon: 'assets/Untitleddesign.svg',
    animation: 'clapping',
  },
  {
    id: 2,
    name: 'Bluteq group',
    pos: 'IT Intern',
    duration: 'June 2022 - December 2022',
    title: "Documented technical issues and solutions to enhance a knowledge base, improving future support responses. Supported system maintenance and troubleshooting, ensuring optimal performance. Provided technical support for hardware, software, and network issues to minimize downtime.",
    icon: '',
    animation: 'salute',
  },
];
