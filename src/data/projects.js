/**
 * Your projects, filled from the resume.
 *
 * image:  put screenshots in /public/projects/ and reference them as
 *         '/projects/shop.webp' (16:10 ratio looks best). Leave '' to use
 *         the built-in abstract cover.
 * github / live: leave '' to hide that button — no dead links.
 * category: used by the filter bar.
 */
export const projects = [
  {
    id: 'negotiator',
    title: 'Price Negotiating Chatbot — Text & Voice',
    category: 'AI & ML',
    year: '',
    overview:
      'An AI-powered e-commerce chatbot that negotiates prices with the shopper by text and voice, alongside product browsing, cart and order processing.',
    problem:
      'Fixed prices leave no room for haggling, which is how many shoppers prefer to buy. The goal was a store where the customer can negotiate the price in chat or by voice.',
    solution:
      'A Django app with a negotiation engine that uses NLP and ML logic to evaluate offers, calculate discounts and generate counter-offers. REST APIs and the Web Speech API connect chat, voice, cart and orders.',
    role: 'Developer — negotiation engine, REST APIs, voice integration and database design.',
    contributions: [
      'Built the negotiation engine that evaluates offers, calculates discounts and generates counter-offers',
      'Integrated REST APIs and the Web Speech API for chat, voice, product browsing, cart and order processing',
      'Designed the database for authentication, products, negotiation sessions, chat history, offers, carts and orders',
    ],
    tech: ['Python', 'Django', 'NLP', 'REST APIs', 'Web Speech API', 'JavaScript', 'SQLite / MySQL'],
    image: '',
    github: '',
    live: '',
    accent: 'teal',
  },
  {
    id: 'emotion',
    title: 'Emotion Detection System',
    category: 'AI & ML',
    year: '',
    overview:
      'A Django web application that detects emotions using a trained machine learning model and shows the results on a web interface.',
    problem:
      'A trained model is hard to use or show to others when it only lives in a script. The goal was to put an emotion detection model behind a simple web interface.',
    solution:
      'A Python training script produces the model, which is integrated into a Django app. Data is stored in SQLite and results are presented on the web interface.',
    role: 'Developer — model training and web integration.',
    contributions: [
      'Wrote the Python script that trains the emotion detection model',
      'Integrated the trained model into a Django web application',
      'Stored data in SQLite and presented results on a web interface',
    ],
    tech: ['Python', 'Django', 'Machine Learning', 'JavaScript', 'SQLite'],
    image: '',
    github: '',
    live: '',
    accent: 'gold',
  },
  {
    id: 'aegon',
    title: 'Aegon Order — E-Commerce Website',
    category: 'Frontend',
    year: '',
    overview:
      'A multi-page e-commerce front end with home, about, products, product detail, offers, cart, login and signup pages.',
    problem:
      'An online store needs a consistent, responsive interface across every page, from browsing products to signing in and checking the cart.',
    solution:
      'Responsive layouts and a shared UI built with HTML5 and CSS3 across all pages, with client-side interactivity added in JavaScript.',
    role: 'Developer — page layouts, UI and interactivity.',
    contributions: [
      'Built the multi-page front end: home, about, products, product detail, offers, cart, login and signup',
      'Designed responsive layouts and a consistent UI across all pages with HTML5 and CSS3',
      'Added client-side interactivity with JavaScript',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: '',
    github: '',
    live: '',
    accent: 'teal',
  },
];