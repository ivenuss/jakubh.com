<script lang="ts">
	/** eslint-disable @typescript-eslint/ban-ts-comment */
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		// @ts-expect-error type is not globally supported
		if (!document.startViewTransition) {
			return;
		}

		return new Promise((resolve) => {
			// @ts-expect-error type is not globally supported
			document.startViewTransition(async () => {
				resolve();

				await navigation.complete;
			});
		});
	});
</script>

<slot />
