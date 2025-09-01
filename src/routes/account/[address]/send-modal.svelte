<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	let destination = $state('');
	let amount = $state(1);
</script>

<Dialog.Root>
	<Dialog.Trigger>
		<Button variant="outline">Send</Button>
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Send</Dialog.Title>
		</Dialog.Header>
		<form class="mt-5">
			<fieldset class="mb-5 flex flex-col gap-y-5">
				<div class="flex flex-col gap-2">
					<Label for="destination" class="text-right">Destination</Label>
					<Input id="destination" placeholder="Destination" bind:value={destination} class="" />
				</div>
				<div class="flex flex-col gap-2">
					<Label for="amount" class="text-right">Amount</Label>
					<Input type="number" id="amount" bind:value={amount} min="1" class="" />
				</div>
			</fieldset>

			<Dialog.Footer>
				<Button type="submit" disabled={!destination || !amount}>Send</Button>
			</Dialog.Footer>
		</form>
	</Dialog.Content>
</Dialog.Root>
