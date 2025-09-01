<script lang="ts">
	import '../app.css';
	import Header from './header.svelte';

	const { children } = $props();
</script>

<Header />
{@render children?.()}
