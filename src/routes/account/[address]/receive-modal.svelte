<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { page } from '$app/state';
</script>

<Dialog.Root>
	<Dialog.Trigger>Receive</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Receive</Dialog.Title>
		</Dialog.Header>
		<div class="my-5 space-y-5">
			<p>Receive assets by sending them to your public key:</p>
			<p>{page.params.address}</p>
		</div>
	</Dialog.Content>
</Dialog.Root>
