import { handleErrorWithSentry, replayIntegration } from '@sentry/sveltekit';
import * as Sentry from '@sentry/sveltekit';

Sentry.init({
	dsn: 'https://88a5dce511cbd70411ead5b69d6b9329@o4510030243168256.ingest.de.sentry.io/4510030244872272',

	tracesSampleRate: 1.0,

	// Enable logs to be sent to Sentry
	enableLogs: true
});

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
