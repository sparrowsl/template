<script lang="ts">
	import { PublicKey } from '@solana/web3.js';
	import { page } from '$app/state';
	// import { useMemo } from 'react'
	// import { useParams } from 'next/navigation'
	// import { ExplorerLink } from '../cluster/cluster-ui'
	// import { AccountBalance, AccountButtons, AccountTokens, AccountTransactions } from './account-ui'
	// import { AppHero } from '../app-hero'
	// import { ellipsify } from '@/lib/utils'

	let address = $state(new PublicKey(String(page.params?.address)));
</script>

<div>
	<div class="flex flex-row justify-center py-[16px] md:py-[64px]">
		<div class="text-center">
			<div class="max-w-2xl">
				<h1 class="text-5xl font-bold">0 SOL</h1>
				<p class="pt-4 md:py-6">{address.toString()}</p>
			</div>
		</div>
	</div>

	<!-- <div class="my-4">
          <AccountButtons address={address} />
        </div> -->
	<div class="space-y-8">
		<!-- <AccountTokens address={address} /> -->
		<!-- <AccountTransactions address={address} /> -->
	</div>
</div>
