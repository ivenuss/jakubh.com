<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/nav/Nav.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="relative flex min-h-screen flex-col">
	<Nav />
	<div class="relative mb-auto mt-10 md:mt-0">
		<main class="mx-auto w-full max-w-(--breakpoint-sm) px-4">
			{@render children?.()}
		</main>
	</div>
	<Footer />
</div>
