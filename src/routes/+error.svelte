<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="py-16">
	<strong class="mb-3 text-lg font-medium">{page.status}</strong>
	<h1 class="text-base">{page?.error?.message}</h1>
</div>
