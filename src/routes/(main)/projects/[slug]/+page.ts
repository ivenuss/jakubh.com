import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getProjects } from '$lib/utils/getProjects';

export const load = (async ({ params }) => {
	const projects = await getProjects();
	const project = projects.find((project) => project.slug === params.slug);

	if (!project) {
		error(404);
	}

	return { project };
}) satisfies PageLoad;
