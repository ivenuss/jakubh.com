// Disables access to DOM typings like `HTMLElement` which are not available
// inside a service worker and instantiates the correct globals
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

// Ensures that the `$service-worker` import has proper type definitions
/// <reference types="@sveltejs/kit" />

// Only necessary if you have an import from `env/static/public`
/// <reference types="../.svelte-kit/ambient.d.ts" />

import { build, files, version } from '$service-worker';

// This gives `self` the correct types
const self = globalThis.self as unknown as ServiceWorkerGlobalScope;

// Create unique cache names for this deployment
const CACHE = `cache-${version}`;
const RUNTIME_CACHE = `runtime-${version}`;

const ASSETS = [
	...build, // the app itself
	...files // everything in `static`
];

// Important pages to precache for offline access
const PRECACHE_PAGES = ['/', '/about', '/projects'];

const log = (message: string) => {
	console.log(`[SW] ${message}`);
};

// Helper function to determine if a request is for a page
function isPageRequest(request: Request): boolean {
	return (
		request.mode === 'navigate' ||
		(request.method === 'GET' && request.headers.get('accept')?.includes('text/html'))
	);
}

// Helper function to determine if a request is for a static asset
function isStaticAsset(url: URL): boolean {
	return (
		ASSETS.includes(url.pathname) ||
		url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|eot)$/)
	);
}

self.addEventListener('install', (event) => {
	log('Install event');

	const addFilesToCache = async () => {
		const cache = await caches.open(CACHE);

		log('Caching app shell and static assets');
		await cache.addAll(ASSETS);

		log('Precaching important pages');
		// Precache important pages for offline access
		const runtimeCache = await caches.open(RUNTIME_CACHE);
		for (const page of PRECACHE_PAGES) {
			try {
				const response = await fetch(page);
				if (response.ok) {
					await runtimeCache.put(page, response);
					log(`Precached page: ${page}`);
				}
			} catch (err) {
				log(`Failed to precache page: ${page}`);
			}
		}
	};

	// Skip waiting to activate immediately
	self.skipWaiting();
	event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
	log('Activate event');

	const deleteOldCaches = async () => {
		const keys = await caches.keys();

		await Promise.all(
			keys.map(async (key) => {
				if (key !== CACHE && key !== RUNTIME_CACHE) {
					log(`Deleting old cache: ${key}`);
					await caches.delete(key);
				}
			})
		);

		// Take control of all clients immediately
		await self.clients.claim();
		log('Service worker activated and took control');
	};

	event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
	// Only handle GET requests
	if (event.request.method !== 'GET') {
		return;
	}

	const url = new URL(event.request.url);

	// Skip cross-origin requests
	if (url.origin !== self.location.origin) {
		return;
	}

	const respond = async (): Promise<Response> => {
		const cache = await caches.open(CACHE);
		const runtimeCache = await caches.open(RUNTIME_CACHE);

		// Strategy 1: Static Assets - Cache First
		if (isStaticAsset(url)) {
			log(`Handling static asset: ${url.pathname}`);

			// Try cache first
			const cachedResponse = await cache.match(event.request);
			if (cachedResponse) {
				log(`Serving static asset from cache: ${url.pathname}`);
				return cachedResponse;
			}

			// Fallback to network and cache the result
			try {
				const response = await fetch(event.request);
				if (response.ok) {
					cache.put(event.request, response.clone());
					log(`Cached static asset: ${url.pathname}`);
				}
				return response;
			} catch (err) {
				log(`Static asset not available offline: ${url.pathname}`);
				throw err;
			}
		}

		// Strategy 2: Pages - Cache First with Network Update
		if (isPageRequest(event.request)) {
			log(`Handling page request: ${url.pathname}`);

			// Try cache first
			const cachedResponse = await runtimeCache.match(event.request);
			if (cachedResponse) {
				log(`Serving page from cache: ${url.pathname}`);

				// Update cache in background (stale-while-revalidate)
				event.waitUntil(
					fetch(event.request)
						.then((response) => {
							if (response.ok) {
								runtimeCache.put(event.request, response.clone());
								log(`Updated cached page: ${url.pathname}`);
							}
						})
						.catch(() => {
							log(`Failed to update cached page: ${url.pathname}`);
						})
				);

				return cachedResponse;
			}

			// Try network and cache the result
			try {
				const response = await fetch(event.request);
				if (response.ok) {
					runtimeCache.put(event.request, response.clone());
					log(`Cached new page: ${url.pathname}`);
				}
				return response;
			} catch (err) {
				log(`Page request failed, no cache available: ${url.pathname}`);

				// Return offline fallback page
				return new Response(
					`<!DOCTYPE html>
					<html lang="en">
					<head>
						<meta charset="utf-8">
						<meta name="viewport" content="width=device-width, initial-scale=1">
						<title>Offline - Jakub Habrcetl</title>
						<style>
							* { box-sizing: border-box; margin: 0; padding: 0; }
							body { 
								font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
								background: #0D0E12;
								color: #f8fafc;
								display: flex;
								flex-direction: column;
								align-items: center;
								justify-content: center;
								min-height: 100vh;
								text-align: center;
								padding: 2rem;
							}
							.container { max-width: 400px; }
							h1 { color: #FF2E40; margin-bottom: 1rem; font-size: 2rem; }
							p { margin-bottom: 1rem; opacity: 0.8; line-height: 1.5; }
							.button {
								background: #FF2E40;
								color: white;
								border: none;
								padding: 0.75rem 1.5rem;
								border-radius: 0.5rem;
								cursor: pointer;
								font-size: 1rem;
								text-decoration: none;
								display: inline-block;
								margin: 0.5rem;
								transition: background 0.2s;
							}
							.button:hover { background: #e02635; }
							.button.secondary {
								background: transparent;
								border: 1px solid #FF2E40;
								color: #FF2E40;
							}
							.button.secondary:hover {
								background: #FF2E40;
								color: white;
							}
							.status {
								margin-top: 2rem;
								padding: 1rem;
								border-radius: 0.5rem;
								background: rgba(255, 46, 64, 0.1);
								border: 1px solid rgba(255, 46, 64, 0.3);
							}
							.online { display: none; }
							.offline { display: block; }
							body.online .online { display: block; }
							body.online .offline { display: none; }
						</style>
					</head>
					<body>
						<div class="container">
							<h1>You're Offline</h1>
							<p class="offline">This page isn't available offline yet. Please check your internet connection and try again.</p>
							<p class="online">Connection restored! You can now browse the site normally.</p>
							
							<div>
								<button class="button" onclick="window.location.reload()">Try Again</button>
								<a href="/" class="button secondary">Go Home</a>
							</div>
							
							<div class="status">
								<p><strong>Available offline:</strong></p>
								<p>• Home page<br>• About page<br>• Projects page</p>
							</div>
						</div>
						
						<script>
							function updateOnlineStatus() {
								document.body.className = navigator.onLine ? 'online' : 'offline';
							}
							
							window.addEventListener('online', updateOnlineStatus);
							window.addEventListener('offline', updateOnlineStatus);
							updateOnlineStatus();
							
							// Auto-retry when back online
							window.addEventListener('online', () => {
								setTimeout(() => window.location.reload(), 1000);
							});
						</script>
					</body>
					</html>`,
					{
						status: 200,
						headers: { 'Content-Type': 'text/html' }
					}
				);
			}
		}

		// Strategy 3: API/Other requests - Network First with Cache Fallback
		try {
			const response = await fetch(event.request);

			// Cache successful responses
			if (response.ok && response.type === 'basic') {
				runtimeCache.put(event.request, response.clone());
				log(`Cached API response: ${event.request.url}`);
			}

			return response;
		} catch (err) {
			log(`Network request failed, trying cache: ${event.request.url}`);

			// Try cache as fallback
			const cachedResponse = await runtimeCache.match(event.request);
			if (cachedResponse) {
				log(`Serving API response from cache: ${event.request.url}`);
				return cachedResponse;
			}

			log(`No cache match for: ${event.request.url}`);
			throw err;
		}
	};

	event.respondWith(respond());
});

// Listen for messages from the client
self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'SKIP_WAITING') {
		self.skipWaiting();
	}
});
