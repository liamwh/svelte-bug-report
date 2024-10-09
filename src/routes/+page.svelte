<script lang="ts">
	// import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	// let user = $state($page.data.session?.user);
	let email = $state('');

	const handleSubmit = () => {
		return async ({ result }) => {
			if (result.type === 'success') {
				const data = result.data;
				console.log('data', data);
			}
		};
	};
</script>

<div class="container mx-auto flex h-full items-center justify-center">
	<div class="flex flex-col items-center space-y-6 text-center">
		<h2 class="h2 py-2 font-bold">Svelte bug report</h2>

		<form
			method="POST"
			action="?/joinWaitlist"
			use:enhance={handleSubmit}
			class="flex flex-col items-center space-y-4"
		>
			<input
				type="email"
				name="email"
				bind:value={email}
				placeholder="Enter some text"
				required
				class="input w-64 rounded-md border px-4 py-2"
			/>
			<button type="submit" class="variant-filled-primary btn">Get 500 response</button>
		</form>
	</div>
</div>
