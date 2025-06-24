import { SITE_URL } from '$lib/constants';

export const prerender = true;

const getSlugFromPath = (path: string) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

export async function GET() {
	const modules = import.meta.glob(`/src/lib/data/projects/*.{md,svx,svelte.md}`);

	const projects = Object.keys(modules).map((path) => `/projects/${getSlugFromPath(path)}`);

	const routes = ['', '/about', '/contact', '/projects', ...projects].map((route) => ({
		url: `${SITE_URL}${route}`,
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
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
