<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { page } from '$app/stores';

	import SunIcon from '$lib/components/svg/icons/sun.svg?component';
	import MoonIcon from '$lib/components/svg/icons/moon.svg?component';

	const handleUpdateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');

		if (theme) {
			document.documentElement.setAttribute('data-mode', theme);
		}
	};

	$: redirect = $page.url.pathname;
</script>

<ul>
	<form method="POST" use:enhance={handleUpdateTheme}>
		<li><button formaction="/?/setTheme&theme=dark&redirect={redirect}"><MoonIcon /></button></li>
		<li><button formaction="/?/setTheme&theme=light&redirect={redirect}"><SunIcon /></button></li>
	</form>
</ul>
