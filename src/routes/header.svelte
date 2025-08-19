<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{ label: 'Home', path: '/' },
		{ label: 'Account', path: '/account' },
		{ label: 'Basic Program', path: '/basic' }
	];

	const isActive = (path: string) => page.url.pathname === path;
</script>

<header class="relative z-50 bg-neutral-100 px-4 py-2 dark:bg-neutral-900 dark:text-neutral-400">
	<div class="mx-auto flex items-center justify-between">
		<div class="flex items-baseline gap-4">
			<a class="text-xl hover:text-neutral-500 dark:hover:text-white" href="/"> Counter </a>
			<div class="hidden items-center md:flex">
				<ul class="flex flex-nowrap items-center gap-4">
					{#each links as { label, path }}
						<li>
							<a
								href={path}
								class="hover:text-neutral-500 dark:hover:text-white {isActive(path) &&
									'text-neutral-500 dark:text-white'}"
							>
								{label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="hidden items-center gap-4 md:flex">
			<!-- <WalletButton />
			<ClusterUiSelect /> -->
		</div>
	</div>
</header>
