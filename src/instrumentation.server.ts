import * as Sentry from '@sentry/sveltekit';

Sentry.init({
	dsn: 'https://88a5dce511cbd70411ead5b69d6b9329@o4510030243168256.ingest.de.sentry.io/4510030244872272',

	tracesSampleRate: 1.0,

	// Enable logs to be sent to Sentry
	enableLogs: true

	// uncomment the line below to enable Spotlight (https://spotlightjs.com)
	// spotlight: import.meta.env.DEV,
});
