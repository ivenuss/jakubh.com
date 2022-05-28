import React from 'react';

interface TechIconsProps {}

export const TechIcons: React.FC<TechIconsProps> = ({}) => {
  return <></>;
};

const techList = {
  js: {
    name: 'JavaScript',
    color: '#f1dd3f',
    image: '/static/images/javascript.svg'
  },
  ts: {
    name: 'TypeScript',
    color: '#3178c6',
    image: '/static/images/typescript.svg'
  },
  php: {
    name: 'Php',
    color: '#777bb3',
    image: '/static/images/php.svg'
  },
  py: {
    name: 'Python',
    color: '#ffd34a',
    image: '/static/images/python.svg'
  },
  sm: {
    name: 'SourceMod',
    color: '#fb9f20',
    image: '/static/images/sourcemod.webp'
  },
  html: {
    name: 'HTML',
    color: '#e44d26',
    image: '/static/images/html.svg'
  },
  css: {
    name: 'CSS',
    color: '#2aa9e0',
    image: '/static/images/css.svg'
  },
  svelte: {
    name: 'Svelte',
    color: '#ff3e00',
    image: '/static/images/svelte.svg'
  },
  jsx: {
    name: 'React',
    color: '#61dafb',
    image: '/static/images/react.svg'
  },
  redux: {
    name: 'Redux',
    color: '#764abc',
    image: '/static/images/redux.svg'
  },
  next: {
    name: 'Next.js',
    color: '#73d4cf',
    image: '/static/images/nextjs.svg'
  },
  tailwind: {
    name: 'Tailwind CSS',
    color: '#19b5b9',
    image: '/static/images/tailwindcss.svg'
  },
  node: {
    name: 'Node.js',
    color: '#8bc500',
    image: '/static/images/nodejs.svg'
  },
  nest: {
    name: 'NestJS',
    color: '#e0234e',
    image: '/static/images/nest.svg'
  },
  gql: {
    name: 'GraphQL',
    color: '#e535ab',
    image: '/static/images/graphql.svg'
  },
  nginx: {
    name: 'Nginx',
    color: '#0d974d',
    image: '/static/images/nginx.svg'
  },
  socket: {
    name: 'Socket.io',
    color: '#343434',
    image: '/static/images/socketio.svg'
  },
  mysql: {
    name: 'Mysql',
    color: '',
    image: '/static/images/mysql.svg'
  },
  mongo: {
    name: 'MongoDB',
    color: '#00ed64',
    image: '/static/images/mongodb.svg'
  },
  redis: {
    name: 'Redis',
    color: '#d82c20',
    image: '/static/images/redis.svg'
  }
};
