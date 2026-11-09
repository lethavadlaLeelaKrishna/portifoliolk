import trainingHall from '../assets/about-teaching.webp';
import trainingSession from '../assets/training-session.webp';
import trainingMemento from '../assets/training-memento.webp';

/**
 * Professional timeline, newest first.
 * type: 'development' | 'teaching' — shown as separate tracks so
 * recruiters can tell building work from training work at a glance.
 * Filled from the resume: Lethavadla Leela Krishna (fresher, B.Tech CSE 2026).
 */
export const experience = [
  {
    type: 'development',
    role: 'Python Full Stack & Generative AI Trainee',
    company: 'Achievers IT',
    period: 'Apr 2026 – Aug 2026',
    location: 'Offline',
    summary: 'Hands-on training in Python full stack development and Generative AI, building React + Django applications backed by SQL and MySQL.',
    points: [
      'Trained in HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, React, Python, SQL, MySQL and Django',
      'Built and practised full-stack web applications with React on the frontend and Python/Django on the backend, with SQL and MySQL integration',
      'Learned Git, GitHub, CI/CD pipelines and AWS deployment, and deployed projects on Netlify and Render',
      'Covered Generative AI fundamentals and AI-powered development tools',
    ],
    tech: ['Python', 'Django', 'React', 'JavaScript', 'MySQL', 'Tailwind CSS', 'Git', 'AWS'],
  },
  {
    type: 'development',
    role: 'AI & Machine Learning Intern',
    company: 'Inlignx Global Pvt. Ltd.',
    period: 'Nov 2025 – Mar 2026',
    location: 'Remote',
    summary: 'Built machine learning and NLP solutions in Python, from data preprocessing to model evaluation.',
    points: [
      'Developed machine learning solutions with Python, Pandas, NumPy and Scikit-learn, including preprocessing, feature engineering, training and evaluation',
      'Built an NLP text classification project using text preprocessing and feature extraction to improve prediction performance',
      'Implemented end-to-end ML workflows covering training, testing, evaluation and performance optimisation',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'NLP'],
  },
];

/**
 * Training block shown under the timeline.
 * The resume lists training received (not delivered), so the photos array is
 * empty. Add entries with imported images from src/assets when you have them.
 */
export const training = {
  summary:
    'Python full stack and Generative AI training, plus AI/ML internship work — hands-on, project-first and built around real code.',
  topics: ['Python', 'Django', 'REST APIs', 'React.js', 'JavaScript', 'SQL & MySQL', 'Machine Learning', 'NLP', 'Git & GitHub', 'CI/CD & AWS'],
  institutions: [
    { name: 'Achievers IT', place: 'Offline · 2026' },
    { name: 'Coding Brains', place: 'Full Stack UI Development · 2025' },
  ],
  photos: [],
};

export const processSteps = [
  { n: '01', title: 'Understand requirements', text: 'Clarify the users, the goal and the constraints. Agree on what “done” looks like before writing code.' },
  { n: '02', title: 'Plan the architecture', text: 'Map routes, data flow and state ownership. Decide what is shared, what is local and what loads lazily.' },
  { n: '03', title: 'Design the interface', text: 'Establish tokens, type scale and layout, then design key screens and every state — empty, loading and error.' },
  { n: '04', title: 'Build reusable components', text: 'Compose small, typed-by-convention components with clear props, so features assemble rather than sprawl.' },
  { n: '05', title: 'Test responsiveness & function', text: 'Check every breakpoint, keyboard path and edge case on real devices, not just a resized browser.' },
  { n: '06', title: 'Optimise & deploy', text: 'Audit bundle size and Core Web Vitals, then ship through a repeatable build and deploy pipeline.' },
];