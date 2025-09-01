<script>
	import { page } from '$app/state';
	import Button from '$lib/components/ui/button/button.svelte';

	const publicKey = $state(true);
	const address = $state('');
</script>

{#if publicKey}
	<div>
		<div class="flex flex-row justify-center py-[16px] md:py-[64px]">
			<div class="text-center">
				<div class="max-w-2xl">
					<h1 class="text-5xl font-bold">Basic</h1>
					<p class="pt-4 md:py-6">Run the program by clicking the "Run program" button.</p>
				</div>
				<p class="mb-6">
					<a href={page.url.pathname}>a link here</a>
				</p>
				<Button type="button">Run Program</Button>
			</div>
		</div>
	</div>
{:else}
	<div class="mx-auto max-w-4xl">
		<div class="hero py-[64px]">
			<div class="hero-content text-center">
				<button class="btn">Wallet</button>
				<!-- <WalletButton className="btn btn-primary" /> -->
			</div>
		</div>
	</div>
{/if}
