import { BehanceIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '~/icons';

export const PREVIEW_TRACK_COUNT = 3;

export const progressTimeline = {
  '2022': ["we'll see 👀"],
  '2021': [
    'have learnt new BE technologies such as Nest, GraphQL and ORM (Prisma + TypeORM) and basic Linux stuff',
    'have learnt FE technologies such as Next.js, Redux',
    'have learnt my first CSS framework Tailwind CSS'
  ],
  '2020': [
    'started learning Node.js and made my first REST API with express (MERN stack)',
    'made some simple projects with React library',
    'introduction to frontend web dev (HTML, CSS) & made my first website'
  ],
  '2019': ['introduction  to programming']
};

export const techStack = {
  Design: ['UI/UX Design', 'Graphic Design', 'Design Systems'],
  Development: ['Linux (basics)', 'JavaScript', 'TypeScript', 'PHP'],
  Frontend: ['React', 'Next.js', 'CSS', 'Tailwind CSS'],
  Backend: ['Node.js', 'NestJS', 'GraphQL', 'Socket.io'],
  Tools: [
    'Figma',
    'Visual Studio Code',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe InDesign'
  ]
};

export const socialMedias = [
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
  },
  {
    title: 'Twitter',
    color: '#1D9BF0',
    icon: TwitterIcon,
    link: process.env.TWITTER_URL
  }
];
