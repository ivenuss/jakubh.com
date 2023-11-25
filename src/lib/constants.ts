import type { ComponentType } from 'svelte';
import { GithubIcon, LinkedinIcon } from 'lucide-svelte';
import CDN77Logo from '$lib/images/cdn77.svg?component';
import SeznamLogo from '$lib/images/seznam.svg?component';
import CSSIcon from '$lib/components/svg/icons/css.svg?component';
import HTMLIcon from '$lib/components/svg/icons/html.svg?component';
import TypeScriptIcon from '$lib/components/svg/icons/typescript.svg?component';
import NodeJSIcon from '$lib/components/svg/icons/nodejs.svg?component';
import ReactIcon from '$lib/components/svg/icons/react.svg?component';
import JavaScriptIcon from '$lib/components/svg/icons/javascript.svg?component';
import TailwindCSSIcon from '$lib/components/svg/icons/tailwindcss.svg?component';
import NextJSIcon from '$lib/components/svg/icons/nextjs.svg?component';
import VSCIcon from '$lib/components/svg/icons/vsc.svg?component';
import NestJSIcon from '$lib/components/svg/icons/nestjs.svg?component';
import FigmaIcon from '$lib/components/svg/icons/figma.svg?component';
import GraphQLIcon from '$lib/components/svg/icons/graphql.svg?component';
import PrismaIcon from '$lib/components/svg/icons/prisma.svg?component';
import LinuxIcon from '$lib/components/svg/icons/linux.svg?component';
import SvelteIcon from '$lib/components/svg/icons/svelte.svg?component';
import GitIcon from '$lib/components/svg/icons/git.svg?component';
import JestIcon from '$lib/components/svg/icons/jest.svg?component';
import PhotoshopIcon from '$lib/components/svg/icons/photoshop.svg?component';
import IllustratorIcon from '$lib/components/svg/icons/illustrator.svg?component';
import InDesignIcon from '$lib/components/svg/icons/indesign.svg?component';
import TwitterIcon from '$lib/components/svg/icons/twitter.svg?component';
import BehanceIcon from '$lib/components/svg/icons/behance.svg?component';

export const SITE_URL = 'https://jakubh.com';
export const EMAIL = 'hello@jakubh.com';
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
		companyLogo: CDN77Logo,
		companyColor: '#FFE115',
		companySite: 'https://www.cdn77.com/',
		employmentType: 'Full-time',
		title: 'Frontend Developer',
		startDate: '2023-02-15',
		endDate: undefined
	},
	{
		companyName: 'Seznam.cz',
		companyLogo: SeznamLogo,
		companyColor: '#CC0000',
		companySite: 'https://o.seznam.cz/',
		employmentType: 'Full-time',
		title: 'Frontend Developer',
		startDate: '2022-11-14',
		endDate: '2022-12-31'
	}
];

export type StackItem = { name: string; icon?: ComponentType; color?: string; url?: string };

export const techStack: Record<string, StackItem[]> = {
	Design: [
		{ name: 'UI/UX Design' },
		{ name: 'Graphic Design' },
		{ name: 'Design System' },
		{ name: 'StoryBook' }
	],
	Development: [
		{
			name: 'Git, GitLab, GitHub',
			icon: GitIcon,
			color: '#F05032',
			url: 'https://git-scm.com/'
		},
		{
			name: 'Linux (bash)',
			icon: LinuxIcon,
			color: '#FCC624',
			url: 'https://www.linux.org/'
		},
		{
			name: 'JavaScript',
			icon: JavaScriptIcon,
			color: '#F7DF1E',
			url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
		},
		{
			name: 'TypeScript',
			icon: TypeScriptIcon,
			color: '#3178C6',
			url: 'https://www.typescriptlang.org/'
		},
		{
			name: 'Jest',
			icon: JestIcon,
			color: '#C21325',
			url: 'https://jestjs.io/'
		}
	],
	Frontend: [
		{
			name: 'React',
			icon: ReactIcon,
			color: '#61DAFB',
			url: 'https://react.dev/'
		},
		{
			name: 'Next.js',
			icon: NextJSIcon,
			color: '#000000',
			url: 'https://nextjs.org/'
		},
		{
			name: 'Svelte, SvelteKit',
			icon: SvelteIcon,
			color: '#FF3E00',
			url: 'https://svelte.dev/'
		},
		{
			name: 'HTML',
			icon: HTMLIcon,
			color: '#E34F26',
			url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
		},
		{
			name: 'CSS',
			icon: CSSIcon,
			color: '#1572B6',
			url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
		},
		{
			name: 'Tailwind CSS',
			icon: TailwindCSSIcon,
			color: '#38B2AC',
			url: 'https://tailwindcss.com/'
		}
	],
	Backend: [
		{
			name: 'Node.js',
			icon: NodeJSIcon,
			color: '#339933',
			url: 'https://nodejs.org/'
		},
		{
			name: 'NestJS',
			icon: NestJSIcon,
			color: '#E0234E',
			url: 'https://nestjs.com/'
		},
		{
			name: 'GraphQL',
			icon: GraphQLIcon,
			color: '#E10098',
			url: 'https://graphql.org/'
		},
		{
			name: 'Prisma',
			icon: PrismaIcon,
			color: '#0C344B',
			url: 'https://www.prisma.io/'
		}
	],
	Tools: [
		{
			name: 'Figma',
			icon: FigmaIcon,
			color: '#F24E1E',
			url: 'https://www.figma.com/'
		},
		{
			name: 'Visual Studio Code',
			icon: VSCIcon,
			color: '#007ACC',
			url: 'https://code.visualstudio.com/'
		},
		{
			name: 'Adobe Photoshop',
			icon: PhotoshopIcon,
			color: '#31A8FF',
			url: 'https://www.adobe.com/products/photoshop.html'
		},
		{
			name: 'Adobe Illustrator',
			icon: IllustratorIcon,
			color: '#FF9A00',
			url: 'https://www.adobe.com/products/illustrator.html'
		},
		{
			name: 'Adobe InDesign',
			icon: InDesignIcon,
			color: '#FF3366',
			url: 'https://www.adobe.com/products/indesign.html'
		}
	]
};

export const socialMedias = [
	{
		title: 'GitHub',
		color: '#4078c0',
		icon: GithubIcon,
		link: 'https://github.com/ivenuss'
	},
	{
		title: 'LinkedIn',
		color: '#0077B5',
		icon: LinkedinIcon,
		link: 'https://www.linkedin.com/in/jakubhabrcetl'
	},
	{
		title: 'Behance',
		color: '#053EFF',
		icon: BehanceIcon,
		link: 'https://www.behance.net/jakubhabrcetl'
	},
	{
		title: 'Twitter',
		color: '#1D9BF0',
		icon: TwitterIcon,
		link: 'https://twitter.com/ijakubh'
	}
];

export const focusRingClass =
	'outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-zinc-900';
