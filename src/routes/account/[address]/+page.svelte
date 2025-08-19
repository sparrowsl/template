<script lang="ts">
	import { PublicKey } from '@solana/web3.js';
	import { page } from '$app/state';
	import SendModal from './send-modal.svelte';
	import ReceiveModal from './receive-modal.svelte';
	import RequestAirdropModal from './request-airdrop.svelte';

	let address = $state(new PublicKey(String(page.params?.address)));
</script>

<div>
	<div class="flex flex-row justify-center py-[16px] md:py-[64px]">
		<div class="text-center">
			<div class="max-w-2xl">
				<h1 class="text-5xl font-bold">0 SOL</h1>
				<p class="pt-4 md:py-6">{address.toString()}</p>
			</div>

			<div class="mx-auto my-4 flex w-fit gap-2">
				<RequestAirdropModal />
				<SendModal />
				<ReceiveModal />
			</div>
		</div>
	</div>

	<div class="space-y-8">
		<!-- <AccountTokens address={address} /> -->
		<!-- <AccountTransactions address={address} /> -->
	</div>
</div>
