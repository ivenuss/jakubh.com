import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = true;

const getSlugFromPath = (path: string) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

type ProjectFrontmatter = {
	slug: string;
	title: string;
	publishedAt: string;
	description: string;
	preview: string;
	owner?: string;
	repo?: string;
	stack: string[];
};

export const load = (async ({ params }) => {
	const modules = import.meta.glob(`/src/lib/data/projects/*.{md,svx,svelte.md}`);

	// TODO: create type
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const project: any = Object.entries(modules).find(([path]) => {
		const slug = getSlugFromPath(path);

		return slug === params.slug;
	})?.[1]?.();

	if (!project) {
		throw error(404); // Couldn't resolve the post
	}

	const { default: component, metadata: frontmatter } = await project;

	return { component, frontmatter: { slug: params.slug, ...frontmatter } as ProjectFrontmatter };
}) satisfies PageLoad;
