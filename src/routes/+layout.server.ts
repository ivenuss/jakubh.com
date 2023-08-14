import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const theme = cookies.get('theme') ?? 'dark';

	return { theme };
}) satisfies LayoutServerLoad;
