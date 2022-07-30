<script>
	import { count } from './storeB'
	
	export let navigate;
	export let location;


</script>
{#if $count.isLoading}
	<h1>Loading ...</h1>
{:else}
	<h1>The count is {$count.value}</h1>
{/if}

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>

<button on:click={count.fetch}>fetch</button>