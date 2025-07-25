<script lang="ts">
	import type { Snippet } from 'svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/nav/Nav.svelte';

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();
</script>

<div class="relative flex min-h-screen flex-col">
	<Nav />
	<div class="relative mt-10 mb-auto md:mt-0">
		<main class="mx-auto w-full max-w-(--breakpoint-sm) px-4">
			{@render children?.()}
		</main>
	</div>
	<Footer />
</div>
