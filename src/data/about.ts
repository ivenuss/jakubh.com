import {
  BehanceIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon
} from '~/icons';

export const bio = `Hey, my name is Jakub, I live in Czechia and my hobbies are biking, working out, coding and playing video games. I also do graphic design, but only partly. Currently I'm mostly enjoying full stack web dev.`;

export const timeline = [
  {
    year: '2022',
    items: ["we'll see 👀"]
  },
  {
    year: '2021',
    items: [
      'have learnt new BE technologies such as Nest, GraphQL and ORM (Prisma + TypeORM) and basic Linux stuff',
      'have learnt FE technologies such as Next.js, Redux',
      'have learnt my first CSS framework Tailwind CSS'
    ]
  },
  {
    year: '2020',
    items: [
      'started learning Node.js and made my first REST API with express (MERN stack)',
      'made some simple projects with React library',
      'introduction to frontend web dev (HTML, CSS) & made my first website'
    ]
  },
  {
    year: '2019',
    items: ['introduction  to programming']
  }
];

export const socials = [
  /* {
    title: 'Instagram',
    color: '#DD5145',
    icon: InstagramIcon,
    link: process.env.INSTAGRAM_URL
  }, */
  {
    title: 'GitHub',
    color: '#4078c0',
    icon: GithubIcon,
    link: process.env.GITHUB_URL
  },
  {
    title: 'LinkedIn',
    color: '#0077B5',
    icon: LinkedinIcon,
    link: process.env.LINKEDIN_URL
  },
  {
    title: 'Behance',
    color: '#053EFF',
    icon: BehanceIcon,
    link: process.env.BEHANCE_URL
  }
  /*  {
    title: 'Twitter',
    color: '#1D9BF0',
    icon: TwitterIcon,
    link: process.env.TWITTER_URL
  } */
];

const techStacks = [
  {
    name: 'js',
    title: 'JavaScript',
    color: '#f1dd3f',
    image: '/static/images/javascript.svg'
  },
  {
    name: 'ts',
    title: 'TypeScript',
    color: '#3178c6',
    image: '/static/images/typescript.svg'
  },
  {
    name: 'php',
    title: 'Php',
    color: '#777bb3',
    image: '/static/images/php.svg'
  },
  {
    name: 'py',
    title: 'Python',
    color: '#ffd34a',
    image: '/static/images/python.svg'
  },
  {
    name: 'sm',
    title: 'SourceMod',
    color: '#fb9f20',
    image: '/static/images/sourcemod.webp'
  },
  {
    name: 'html',
    title: 'HTML',
    color: '#e44d26',
    image: '/static/images/html.svg'
  },
  {
    name: 'css',
    title: 'CSS',
    color: '#2aa9e0',
    image: '/static/images/css.svg'
  },
  {
    name: 'svelte',
    title: 'Svelte',
    color: '#ff3e00',
    image: '/static/images/svelte.svg'
  },
  {
    name: 'jsx',
    title: 'React',
    color: '#61dafb',
    image: '/static/images/react.svg'
  },
  {
    name: 'redux',
    title: 'Redux',
    color: '#764abc',
    image: '/static/images/redux.svg'
  },
  {
    name: 'next',
    title: 'Next.js',
    color: '#73d4cf',
    image: '/static/images/nextjs.svg'
  },
  {
    name: 'tailwind',
    title: 'Tailwind CSS',
    color: '#19b5b9',
    image: '/static/images/tailwindcss.svg'
  },
  {
    name: 'node',
    title: 'Node.js',
    color: '#8bc500',
    image: '/static/images/nodejs.svg'
  },
  {
    name: 'nestjs',
    title: 'NestJS',
    color: '#e0234e',
    image: '/static/images/nest.svg'
  },
  {
    name: 'gql',
    title: 'GraphQL',
    color: '#e535ab',
    image: '/static/images/graphql.svg'
  },
  {
    name: 'nginx',
    title: 'Nginx',
    color: '#0d974d',
    image: '/static/images/nginx.svg'
  },
  {
    name: 'socket',
    title: 'Socket.io',
    color: '#343434',
    image: '/static/images/socketio.svg'
  },
  {
    name: 'mysql',
    title: 'Mysql',
    color: '',
    image: '/static/images/mysql.svg'
  },
  {
    name: 'mongo',
    title: 'MongoDB',
    color: '#00ed64',
    image: '/static/images/mongodb.svg'
  },
  {
    name: 'redis',
    title: 'Redis',
    color: '#d82c20',
    image: '/static/images/redis.svg'
  }
] as const;

type TechStack = typeof techStacks[number]['name'];

export const stacks = [
  {
    title: 'Programming Languages',
    items: [
      { title: 'JavaScript', image: '/static/images/javascript.svg' },
      { title: 'TypeScript', image: '/static/images/typescript.svg' },
      { title: 'Php', image: '/static/images/php.svg' },
      { title: 'Python', image: '/static/images/python.svg' },
      { title: 'SourceMod', image: '/static/images/sourcemod.webp' }
    ]
  },
  {
    title: 'Frontend Development',
    items: [
      { title: 'HTML', image: '/static/images/html.svg' },
      { title: 'CSS', image: '/static/images/css.svg' },
      { title: 'Svelte', image: '/static/images/svelte.svg' },
      { title: 'React', image: '/static/images/react.svg' },
      { title: 'Redux', image: '/static/images/redux.svg' },
      { title: 'Next.js', image: '/static/images/nextjs.svg' },
      { title: 'Tailwind CSS', image: '/static/images/tailwindcss.svg' }
    ]
  },
  {
    title: 'Backend Development',
    items: [
      { title: 'Node.js', image: '/static/images/nodejs.svg' },
      { title: 'NestJS', image: '/static/images/nest.svg' },
      { title: 'GraphQL', image: '/static/images/graphql.svg' },
      { title: 'Nginx', image: '/static/images/nginx.svg' },
      { title: 'Seocket.io', image: '/static/images/socketio.svg' }
    ]
  },
  {
    title: 'Databases',
    items: [
      { title: 'Mysql', image: '/static/images/mysql.svg' },
      { title: 'MongoDB', image: '/static/images/mongodb.svg' },
      { title: 'Redis', image: '/static/images/redis.svg' }
    ]
  },
  {
    title: 'Softwares',
    items: [
      {
        title: 'Visual Studio Code',
        image: '/static/images/visualstudiocode.svg'
      },
      {
        title: 'Figma',
        image: '/static/images/figma.svg'
      },
      {
        title: 'Adobe Photoshop',
        image: '/static/images/adobe_photoshop.svg'
      },
      {
        title: 'Adobe Illustrator',
        image: '/static/images/adobe_illustrator.svg'
      },
      {
        title: 'Adobe InDesign',
        image: '/static/images/adobe_indesign.svg'
      }
    ]
  }
];
