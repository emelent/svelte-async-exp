<script>
	import { count } from './storeC'
	
	export let navigate;
	export let location;

	let isLoading = false

	async function fetchNumber() {
		isLoading = true
		await count.fetch()
		isLoading = false
	}
</script>

{#if isLoading}
	<h1>Loading...</h1>
{:else}
	<h1>The count is {$count}</h1>
{/if}

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>

<button on:click={fetchNumber}>fetch</button>