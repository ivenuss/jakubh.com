<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { page } from '$app/stores';

	import SunIcon from '$lib/components/svg/icons/sun.svg?component';
	import MoonIcon from '$lib/components/svg/icons/moon.svg?component';

	let currentTheme = $page.data.theme;

	const handleUpdateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');

		if (theme) {
			currentTheme = theme;
			document.documentElement.setAttribute('data-mode', theme);
		}
	};

	$: redirect = $page.url.pathname;
</script>

<form
	method="POST"
	use:enhance={handleUpdateTheme}
	class="flex items-center rounded-full bg-zinc-100 p-1.5 ring-zinc-300 transition-colors active:bg-zinc-200/80 active:ring-2 dark:bg-zinc-800 dark:ring-zinc-500 dark:active:bg-zinc-700"
>
	{#if currentTheme === 'light'}
		<button formaction="/?/setTheme&theme=dark&redirect={redirect}">
			<MoonIcon class="h-4 w-4" />
			<span class="sr-only">Dark mode</span>
		</button>
	{:else if currentTheme === 'dark'}
		<button formaction="/?/setTheme&theme=light&redirect={redirect}">
			<SunIcon class="h-4 w-4" />
			<span class="sr-only">Light mode</span>
		</button>
	{/if}
</form>
