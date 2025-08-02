import type { Project } from '$lib/types';
import type { Component } from 'svelte';

const getSlugFromPath = (path: string) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

export const getProjects = async (): Promise<Project[]> => {
	const modules = import.meta.glob('/src/lib/data/projects/*.{md,svx,svelte.md}');

	const projectPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(project) =>
				({
					slug: getSlugFromPath(path),
					...(project as unknown as App.MdsvexFile).metadata,
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					component: (project as any)?.default as unknown as Component
				}) as Project
		)
	);

	const projects = await Promise.all(projectPromises);

	return projects.sort(
		(a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
	);
};
