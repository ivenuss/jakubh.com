import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const newTheme = event.url.searchParams.get('theme');
	const cookieTheme = event.cookies.get('theme');

	const theme = newTheme ?? cookieTheme ?? 'dark';

	if (theme) {
		return await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('data-mode=""', `data-mode="${theme}"`)
		});
	}

	return await resolve(event);
}) satisfies Handle;
