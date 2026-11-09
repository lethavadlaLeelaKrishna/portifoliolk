/**
 * Skills grouped by category. `note` is one honest line on how you use it —
 * this replaces meaningless percentage bars.
 */
export const skillGroups = [
  {
    id: 'frontend',
    label: 'Frontend',
    index: '01',
    summary: 'Building responsive and interactive web interfaces.',
    skills: [
      { name: 'React.js', note: 'Component-based UI development and reusable components' },
      { name: 'JavaScript', note: 'DOM manipulation, interactive features and Web Speech API' },
      { name: 'HTML5', note: 'Semantic markup and structured web pages' },
      { name: 'CSS3', note: 'Responsive layouts and consistent user interfaces' },
    ],
  },
  {
    id: 'styling',
    label: 'Styling',
    index: '02',
    summary: 'Creating responsive layouts and consistent UI designs.',
    skills: [
      { name: 'Tailwind CSS', note: 'Utility-first styling and responsive layouts' },
      { name: 'Bootstrap', note: 'Responsive grids and reusable UI components' },
      { name: 'Responsive Design', note: 'Building mobile-friendly and adaptive web interfaces' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    index: '03',
    summary: 'Developing Python-based backend applications and APIs.',
    skills: [
      { name: 'Python', note: 'Application development, data processing and backend logic' },
      { name: 'Django', note: 'Building database-driven web applications' },
      { name: 'REST APIs', note: 'API development and frontend-backend integration' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    index: '04',
    summary: 'Managing structured data and application databases.',
    skills: [
      { name: 'SQL', note: 'Writing queries and managing relational database records' },
      { name: 'MySQL', note: 'Database design, data storage and retrieval' },
      { name: 'SQLite', note: 'Lightweight database integration for Python applications' },
    ],
  },
  {
    id: 'aiml',
    label: 'AI & Machine Learning',
    index: '05',
    summary: 'Building intelligent applications using machine learning and NLP.',
    skills: [
      { name: 'Machine Learning', note: 'Model training, testing and performance evaluation' },
      { name: 'Natural Language Processing', note: 'Text preprocessing, feature extraction and text classification' },
      { name: 'Scikit-learn', note: 'Machine learning algorithms and model evaluation' },
      { name: 'NumPy', note: 'Numerical computing and array operations' },
      { name: 'Pandas', note: 'Data preprocessing, manipulation and analysis' },
      { name: 'EDA', note: 'Exploratory data analysis and understanding datasets' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Cloud',
    index: '06',
    summary: 'Development workflows, version control and cloud deployment.',
    skills: [
      { name: 'Git', note: 'Version control and source code management' },
      { name: 'GitHub', note: 'Repository management and project collaboration' },
      { name: 'VS Code', note: 'Development, debugging and project management' },
      { name: 'AWS', note: 'Cloud computing and deployment fundamentals' },
      { name: 'CI/CD', note: 'Understanding automated build and deployment workflows' },
      { name: 'Netlify', note: 'Frontend application deployment' },
      { name: 'Render', note: 'Application hosting and deployment' },
    ],
  },
  {
    id: 'ai-tools',
    label: 'AI Tools',
    index: '07',
    summary: 'Using AI-powered tools to support development and productivity.',
    skills: [
      { name: 'ChatGPT', note: 'Technical problem-solving, debugging and learning assistance' },
      { name: 'Generative AI', note: 'Understanding AI-powered application development' },
    ],
  },
];