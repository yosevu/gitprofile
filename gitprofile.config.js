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
    linkedin: 'yosevu',
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
    email: 'hello@yosevu.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1RoMSK3FDpdW3ruBT5mfxpjnWHrzj3IMfBS3aCI5H3yg/edit?usp=sharing',
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'SQL',
    'NoSQL',
    'REST',
    'JSON-RPC',
    'GraphQL',
    'Cypress',
    'Jest',
    'Testing Library',
    'Web accessibility',
    'Responsive design',
    'Design systems',
    'Figma',
    'SASS',
    'Tailwind CSS',
    'DevOps',
    'GitHub Actions',
    'Docker',
    'Terraform',
    'AWS',
    'Functional programming',
    'Clojure',
    'ClojureScript',
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
  // certifications: [{}],
  education: [
    {
      institution: 'Thinkful',
      degree: 'Software Engineering',
      from: '2016',
      to: '2017',
    },
    {
      institution: 'University of Colorado',
      degree: 'M.A. Linguistics for TESOL',
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
      title: 'Adobe Spectrum CSS',
      description:
        "I worked on the core CSS components of Spectrum, Adobe's design system. The design system is based on design tokens represented as JSOn data using Style Dictionary. We used these tokens to construct the CSS custom properties used to build the core CSS components that can be used consistently across different platforms such  Web Components and React. I built and tested complex responsive and accessible components with different design, theme, scale, and writing mode variants.",
      imageUrl: 'https://spectrum.adobe.com/static/adobe_logo_spectrum_site.svg',
      link: 'https://spectrum.adobe.com/',
    },
    {
      title: 'Clothing E-commerce Microfrontends',
      description:
        'Enterprise e-commerce microfrontends for a large clothing company with multiple brands and millions of users. I worked on large two different microfrontend apps over the course of two years: a product listing page and a product detail page. I primarily built, tested, and maintained accessible React and TypeScript components. I did extensive work with service providers such as for product data as well as contract testing with Pact. I also worked on the data and analytics layer of the application using Tealium and Adobe Analytics. I participated in concepts sprints such as for a redesign of the product listing page. I collaborated with the search page and the product page to build and deliver components and features across multiple micro frontends. I also onboarded, mentored new developers on the team. Note: I cannot share project specific details publicly due to client confidentiality.',
      imageUrl: '',
      link: '',
    },
    {
      title: 'Smart Toothbrush Dashboard',
      description:
        'Enterprise IoT dashboard that interfaced with smart toothbrushes! This was one of my most fun and memorable projects. I had to learn an entirely technology stack for the job. The project used a serverless architecture built with Amazon Web Services (AWS). I used Terraform to define configuration as code, commit, and deploy it to the cloud. I used Lambdas written in Go to interface with the DynamoDB database and the IoT platform to communicate with the devices, applications, and other services. Finally I used AppSync GraphQL endpoints to query and mutate data from the frontend dashboard built with Vue.js. Note: I cannot share project specific details publicly due to client confidentiality.',
      imageUrl: '',
      link: '',
    },
    {
      title: 'Sparkeats',
      description:
        'Food reviews and restaurant ratings. This project was originally created by Sparkbox full-stack apprentices. I made the project public and open source during Hacktoberfest 2022. I recently completed the minimum viable product (MVP) rebuild with React, TypeScript, SASS, and Firebase. It is an educational resource and playground that I will continue to develop, maintain, and use to explore and showcase best practices and new technologies.',
      imageUrl: 'https://sparkbox.github.io/sparkeats/favicon-196x196.png',
      link: 'https://github.com/sparkbox/sparkeats',
    },
    // {
    //   title: 'equibly',
    //   description:
    //     'Share expenses equitably and privately. Built with React, JavaScript, Tailwind CSS, and Firebase.',
    //   imageUrl: 'https://i.ibb.co/yPx8sjx/logo.png',
    //   link: 'https://github.com/yosevu/equibly',
    // },
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
