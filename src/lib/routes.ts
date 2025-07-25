import { resolve, resolveRoute } from '$app/paths';
import { page } from '$app/state';
import { type Pathname, type ResolvedPathname, type RouteParams } from '$app/types';

// type RouteParams<Param extends string> = Record<Param, string>;
// type Route = string | ((params: RouteParams<string>) => string);

export const routes = {
	home: '/',
	about: '/about',
	projects: '/projects',
	projectDetails: (params: RouteParams<'/(main)/projects/[slug]'>) => `/projects/${params.slug}`
} satisfies Record<ResolvedPathname, Route>;

// page.route.id === '/(main)/projects';

const test: ResolvedPathname = '/(main)/_components';
