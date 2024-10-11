<script lang="ts">
	import { onNavigate } from '$app/navigation';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) {
			return;
		}

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();

				await navigation.complete;
			});
		});
	});
</script>

{@render children?.()}
