// gitprofile.config.js

const config = {
  github: {
    username: 'yosevu', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['etymonline', 'front-end-interview-questions-for-anki'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: 'yosevu',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    website: '',
    phone: '',
    email: 'yosevuk@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1ufSQ4jmrX8axhi_Nd91QDbjbWXjqh6hV-fm21taFUGk/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue.js',
    'Clojure',
    'Rust',
    'DevOps',
    'Serverless',
  ],
  experiences: [
    {
      company: 'Sparkbox',
      position: 'Developer',
      from: 'September 2018',
      to: 'February 2023',
      companyLink: 'https://sparkbox.com/',
    },
    {
      company: 'Center for Immigrant and Refugee Families (Dissolved)',
      position: 'Teacher',
      from: 'June 2015',
      to: 'May 2016',
    },
  ],
  certifications: [
    {
      name: 'Software Engineering',
      body: 'Thinkful',
      year: '2016 - 2017',
    },
  ],
  education: [
    {
      institution: 'University of Colorado',
      degree: 'M.A. Linguistics',
      from: '2013',
      to: '2015',
    },
    {
      institution: 'Northern State University',
      degree: 'B.A. English',
      from: '2009',
      to: '2013',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Sparkeats',
      description:
        'Food reviews and restaurant ratings. Built with React, TypeScript, SASS, and Firebase.',
      imageUrl: 'https://sparkbox.github.io/sparkeats/favicon-196x196.png',
      link: 'https://github.com/yosevu/sparkeats',
    },
    {
      title: 'equibly',
      description:
        'Share expenses equitably and privately. Built with React, JavaScript, Tailwind CSS, and Firebase.',
      imageUrl: 'https://i.ibb.co/yPx8sjx/logo.png',
      link: 'https://github.com/yosevu/equibly',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'yosevu', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: ['lofi'],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
