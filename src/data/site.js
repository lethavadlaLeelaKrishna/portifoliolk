/**
 * ─────────────────────────────────────────────────────────────
 *  PERSONAL DETAILS — edit this file first.
 *  Anything left as an empty string or null is hidden on the
 *  page instead of showing a placeholder or a dead link.
 *  Filled from the resume: Lethavadla Leela Krishna.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  name: 'Leela Krishna',
  monogram: 'LK',
  // Hero photo: a background-free cutout in public/ (e.g. 'portrait.webp'). Leave '' to show the monogram.
  portrait: '',
  // true for a full photo with its background (shown as a framed card); false for a cutout.
  portraitFramed: true,
  role: 'Python Full Stack Developer',
  company: '', // fresher: no current employer to show
  location: 'Guntur, Andhra Pradesh, India',

  // Hero
  headline: ['Full-stack web apps with', 'AI and ML built in.'],
  intro:
    'I build database-driven web applications with Python, Django and React, and add AI and NLP features such as a price-negotiating chatbot and an emotion detection system.',

  availability: {
    open: true,
    label: 'Available for fresher Python, full stack & AI/ML roles in Hyderabad',
  },

  // Put your PDF at public/resume.pdf (or change the path). Set to '' to hide the button.
  resumeUrl: 'resume.pdf',

  email: 'lethavadlaleelakrishna@gmail.com',
  social: {
    github: 'https://github.com/lethavadlaLeelaKrishna',
    linkedin: 'https://www.linkedin.com/in/lethavadlaLeelaKrishna',
    instagram: '',
    twitter: '', // optional
  },

  // About
  about: {
    summary: [
      'I am a B.Tech Computer Science graduate (JNTUK, 2022–2026) and a Python full stack developer with a growing focus on AI and machine learning. I work with Python, Django, REST APIs, React, JavaScript, SQL and MySQL, and I like projects where a database, an API and a model all have to work together.',
      'Over the last year I completed an AI & Machine Learning internship at Inlignx Global, where I built ML and NLP text classification workflows, followed by Python full stack and Generative AI training at Achievers IT. I have built an AI price-negotiation chatbot with text and voice, an emotion detection web app and a multi-page e-commerce front end, and I am comfortable with Git, GitHub, CI/CD and deploying on AWS, Netlify and Render.',
    ],
    philosophy: [
      { title: 'Data first', text: 'I design the database early. In my chatbot project that covered authentication, products, negotiation sessions, chat history, offers, carts and orders.' },
      { title: 'Models need a full workflow', text: 'Good ML work means preprocessing, feature engineering, training and evaluation, not just fitting a model once.' },
      { title: 'Ship it and keep it reproducible', text: 'I use Git and GitHub, and I have deployed projects to Netlify and Render, so work can be reviewed, rerun and improved.' },
    ],
    goals:
      'Looking for a fresher Python full stack or AI/ML developer role where I can learn from an experienced team and ship real features.',
  },

  /**
   * Only add numbers you can back up in an interview.
   * Set value to null to hide a stat. If all are null the row is hidden.
   */
  stats: [
    { label: 'Projects built', value: '3' },
    { label: 'Months of AI/ML internship', value: '5' },
    { label: 'Certifications', value: '3' },
  ],

  /**
   * Contact form. Create a free form at https://formspree.io and put its
   * endpoint in a .env file:  VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxx
   * Without it, the form opens the visitor's email app instead — it never
   * pretends to have sent anything.
   */
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
};