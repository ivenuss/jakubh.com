// Disables access to DOM typings like `HTMLElement` which are not available
// inside a service worker and instantiates the correct globals
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

// Ensures that the `$service-worker` import has proper type definitions
/// <reference types="@sveltejs/kit" />

// Only necessary if you have an import from `$env/static/public`
/// <reference types="../.svelte-kit/ambient.d.ts" />

import { build, files, prerendered, version } from '$service-worker';

// This gives `self` the correct types
const self = globalThis.self as unknown as ServiceWorkerGlobalScope;

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const ASSETS = [
	...build, // the app itself
	...files // everything in `static`
];

function log(message: string) {
	console.log(`[SW] ${message}`);
}

self.addEventListener('install', (event) => {
	log('Install event');

	const addFilesToCache = async () => {
		const cache = await caches.open(CACHE);

		log('Caching app shell and static assets');

		await cache.addAll(ASSETS);
	};

	event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
	log('Activate event');

	console.log({ prerendered });

	const deleteOldCaches = async () => {
		const keys = await caches.keys();

		await Promise.all(
			keys.map(async (key) => {
				if (key !== CACHE) {
					log(`Deleting old cache: ${key}`);
					await caches.delete(key);
				}
			})
		);
	};

	event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	const url = new URL(event.request.url);

	const respond = async () => {
		const cache = await caches.open(CACHE);

		// Serve assets from cache first
		if (ASSETS.includes(url.pathname)) {
			const response = await cache.match(url.pathname);
			if (response) {
				log(`Serving asset from cache: ${url.pathname}`);
				return response;
			}
			log(`Asset not found in cache: ${url.pathname}`);
		}

		// For other requests, try network first, then cache
		try {
			const response = await fetch(event.request);

			if (!(response instanceof Response)) {
				throw new Error('invalid response from fetch');
			}

			// Cache successful GET responses (status 200, basic or opaque)
			// Only cache HTTP/HTTPS requests, not chrome-extension, data:, etc.
			if (
				response.status === 200 &&
				(response.type === 'basic' || response.type === 'opaque') &&
				url.protocol.startsWith('http')
			) {
				cache.put(event.request, response.clone());
				log(`Cached new resource: ${event.request.url}`);
			}

			return response;
		} catch (err) {
			log(`Fetch failed, trying cache: ${event.request.url}`);
			const response = await cache.match(event.request);

			if (response) {
				log(`Serving fallback from cache: ${event.request.url}`);
				return response;
			}

			log(`No cache match for: ${event.request.url}`);
			throw err;
		}
	};

	event.respondWith(respond());
});
