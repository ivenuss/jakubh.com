import type { PageServerLoad } from './$types';
import type { Project } from '$lib/types';
import { redirect, type Actions } from '@sveltejs/kit';

// export const prerender = true;

const getSlugFromPath = (path: string) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

export const load = (async () => {
	const modules = import.meta.glob(`/src/lib/data/projects/*.{md,svx,svelte.md}`);

	const projectPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(project) =>
				({
					slug: getSlugFromPath(path),
					...(project as unknown as App.MdsvexFile).metadata
				} as Project)
		)
	);

	const projects = await Promise.all(projectPromises);

	return {
		projects: projects.sort(
			(a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
		)
	};
}) satisfies PageServerLoad;

export const actions = {
	setTheme: async ({ url, cookies }) => {
		const theme = url.searchParams.get('theme');
		const redirectTo = url.searchParams.get('redirect');

		if (theme) {
			cookies.set('theme', theme, { path: '/', maxAge: 60 * 60 * 24 * 365 });
		}

		throw redirect(303, redirectTo ?? '/');
	}
} satisfies Actions;
