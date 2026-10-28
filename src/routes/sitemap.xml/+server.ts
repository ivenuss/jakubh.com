import { resolve } from '$app/paths';
import { SITE_URL } from '#lib/constants.js';
import { getProjects } from '#lib/utils/getProjects.js';

export const prerender = true;

export async function GET() {
	const projects = await getProjects();

	const routes = [
		resolve('/(main)'),
		resolve('about'),
		resolve('projects'),
		...projects.map((project) => resolve('/(main)/projects/[slug]', { slug: project.slug }))
	].map((route) => ({
		url: new URL(route, SITE_URL).href,
		lastModified: new Date().toISOString().split('T')[0]
	}));

	return new Response(
		`
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${routes
				.map(
					(route) => `<url><loc>${route.url}</loc><lastmod>${route.lastModified}</lastmod></url>`
				)
				.join('')}
    </urlset>`.trim(),
		{ headers: { 'Content-Type': 'application/xml' } }
	);
}
