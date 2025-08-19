<script lang="ts">
	const links = [
		{ label: 'Solana Docs', href: 'https://docs.solana.com/' },
		{ label: 'Solana Faucet', href: 'https://faucet.solana.com/' },
		{ label: 'Solana Cookbook', href: 'https://solana.com/developers/cookbook/' },
		{ label: 'Solana Stack Overflow', href: 'https://solana.stackexchange.com/' },
		{ label: 'Solana Developers GitHub', href: 'https://github.com/solana-developers/' }
	];
</script>

<div>
	<div class="flex flex-row justify-center py-[16px] md:py-[64px]">
		<div class="text-center">
			<div class="max-w-2xl">
				<h1 class="text-5xl font-bold">gm</h1>
				<p class="pt-4 md:py-6">Say hi to your new Solana app.</p>
			</div>
		</div>
	</div>

	<div class="mx-auto max-w-xl py-6 text-center sm:px-6 lg:px-8">
		<div class="space-y-2">
			<p>Here are some helpful links to get you started.</p>
			{#each links as link}
				<div>
					<a
						href={link.href}
						class="hover:text-gray-500 dark:hover:text-gray-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						{link.label}
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>
