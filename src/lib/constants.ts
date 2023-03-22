import * as Icon from '~/icons';
import type { IconType } from 'react-icons';

export const PREVIEW_TRACK_COUNT = 3;

export const progressTimeline = {
  '2023': ["we'll see"],
  '2022': [
    'basic understanding about unit testing (Jest, React Testing Lib)',
    'got my first job at Seznam.cz',
    'better understanding about CI/CD workflow',
    'have learnt new technology called tRPC',
    'improved my Git & TypeScript skills'
  ],
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
  '2019': ['introduction to programming']
};

export const workExperiences = [
  {
    companyName: 'CDN77',
    companySite: 'https://www.cdn77.com/',
    employmentType: 'Full-time',
    title: 'Frontend Developer',
    startDate: '02-15-2023',
    endDate: undefined
  },
  {
    companyName: 'Seznam.cz',
    companySite: 'https://o.seznam.cz/',
    employmentType: 'Full-time',
    title: 'UI Developer',
    startDate: '11-14-2022',
    endDate: '12-31-2022'
  }
];

export type StackItem = [string, IconType?];

export const techStack: Record<string, StackItem[]> = {
  Design: [
    ['UI/UX Design', Icon.DesktopIcon],
    ['Graphic Design', Icon.PaletteIcon],
    ['Design System', Icon.RulerIcon],
    ['StoryBook', Icon.StorybookIcon]
  ],
  Development: [
    ['Jest', Icon.JestIcon],
    ['Git, GitLab, GitHub', Icon.GitCommitIcon],
    ['Linux (basics)', Icon.LinuxIcon],
    ['JavaScript', Icon.JavaScriptIcon],
    ['TypeScript', Icon.TypeScriptIcon]
  ],
  Frontend: [
    ['React', Icon.ReactIcon],
    ['Next.js', Icon.ReactIcon],
    ['HTML', Icon.HtmlIcon],
    ['CSS', Icon.CssIcon],
    ['Tailwind CSS', Icon.TailwindCssIcon]
  ],
  Backend: [
    ['Node.js', Icon.NodeJsIcon],
    ['NestJS', Icon.NestjsIcon],
    ['GraphQL', Icon.GraphQLIcon],
    ['Socket.io', Icon.SocketIoIcon]
  ],
  Tools: [
    ['Figma', Icon.FigmaIcon],
    ['VSC', Icon.VSCodeIcon],
    ['Photoshop', Icon.PhotoshopIcon],
    ['Illustrator', Icon.IllustratorIcon],
    ['InDesign', Icon.IndesignIcon]
  ]
};

export const socialMedias = [
  {
    title: 'GitHub',
    color: '#4078c0',
    icon: Icon.GithubIcon,
    link: process.env.GITHUB_URL ?? '#'
  },
  {
    title: 'LinkedIn',
    color: '#0077B5',
    icon: Icon.LinkedinIcon,
    link: process.env.LINKEDIN_URL ?? '#'
  },
  {
    title: 'Behance',
    color: '#053EFF',
    icon: Icon.BehanceIcon,
    link: process.env.BEHANCE_URL ?? '#'
  },
  {
    title: 'Twitter',
    color: '#1D9BF0',
    icon: Icon.TwitterIcon,
    link: process.env.TWITTER_URL ?? '#'
  }
];
