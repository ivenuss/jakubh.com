<script lang="ts">
	// Note: name must be unique
	export let name: string;
</script>

<span style="view-transition-name: {name}">
	<slot />
</span>
