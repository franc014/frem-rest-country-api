<script>
	import { onMount } from 'svelte';
	import { region } from './store';
	let countries = [];
	let fetchError = '';
	import CountryCard from './CountryCard.svelte';

	async function loadComponent() {
	
		try {
			const countriesApiResponse = await fetch(`${import.meta.env.PUBLIC_API_HOST}/api/${$region}.json`);
			if (countriesApiResponse.status === 404) {
				fetchError = 'Failed to fetch the requested data';
				setTimeout(function () {
					fetchError = '';
				}, 6000);
			}

			countries = (await countriesApiResponse.json()).countries;
		} catch (error) {
			console.error('Please, check the API url and the server connection and try again');
		}
	}
	onMount(loadComponent);

	region.subscribe(() => {
		loadComponent();
	});
</script>

{#key countries}
<div class="grid gap-14 mb-40" >
	{#if fetchError}
		<p class="alert alert-failure">{fetchError}</p>
	{/if}

	{#if !countries}
		<p class="bg-red-200 w-20 h-20 p-8">No countries data has been fetched</p>
	{/if}
	{#each countries as country (country)}
			<CountryCard {country} />
	{/each}
</div>
{/key}

<style>
	div {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}
</style>
