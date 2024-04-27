<script lang="ts">
	interface Props {
		/**
		 * Name has to be unique for each transition
		 */
		name: string;
		children: import('svelte').Snippet;
	}

	let { name, children }: Props = $props();
</script>

<span style="view-transition-name: {name}">
	{@render children()}
</span>
