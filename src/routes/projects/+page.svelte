<script lang="ts">
	import Headline from '$lib/components/nav/Headline.svelte';
	import Projects from './Projects.svelte';
</script>

<div class="mb-5">
	<Headline level="1" class="mb-3">My Projects</Headline>
	<p class="text-zinc-400">
		I've made a lot of projects and this is a small selection of some that I found interesting.
	</p>
</div>

<Projects />
