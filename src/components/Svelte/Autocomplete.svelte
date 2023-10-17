<script>
	import { fade } from 'svelte/transition';
	import debounce from 'lodash.debounce';
	let searchTerm;
	let foundCountries = [];

	async function searchCountry(e) {
		searchTerm = e.target.value;
		const countriesAPI = `http://localhost:4321/api/search/${searchTerm}.json`;
		try {
			const countriesApiResponse = await fetch(countriesAPI);

			if (countriesApiResponse.status === 404) {
				console.error('No API found for the search term');
				foundCountries = [];
			}

			const countriesJson = await countriesApiResponse.json();

			foundCountries = countriesJson.countries;
		} catch (error) {
			console.error({ error });
			foundCountries = [];
		}
	}

	function resetSearch() {
		foundCountries = [];
	}

	function handleKeyDown(e) {
		if (e.key === 'Escape') {
			resetSearch();
		}
	}
</script>

<svelte:window on:keydown={handleKeyDown} />
<div class="w-full relative">
	<label
		for="search-country"
		class="flex items-center gap-4 h-12 mb-3 sm:mb-0 sm:w-5/12 rounded shadow bg-white dark:bg-dark-blue"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6 ml-4 dark:text-lighter-gray"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
			/>
		</svg>
		<input
			id="search-country"
			class=" outline-none min-h-full w-full text-normal sm:text-xs rounded-tr rounded-br pl-4 dark:bg-dark-blue dark:text-lighter-gray"
			type="text"
			placeholder="Search for a country..."
			on:input={debounce(searchCountry, 400)}
		/>
		<button
			class:foundCountries={foundCountries.length !== 0}
			class="text-xl text-red-500 absolute left-[90%] sm:left-[38%] md:left[40%] top-2 hidden"
			on:click={resetSearch}>x</button
		>
	</label>
	<ul
		class="bg-lighter-gray w-full sm:w-5/12 absolute z-30 top-full rounded shadow-xl dark:bg-dark-blue dark:text-lighter-gray"
	>
		{#each foundCountries as country (country)}
			<li class="border border-dark-gray/10" transition:fade>
				<a
					href={`/countries/${country.cca3}`}
					class="rounded flex items-center gap-4 hover:bg-darker-blue hover:text-theme-white dark: w-full h-full px-2 py-2"
				>
					<img src={country.flags.svg} alt={country.name.common} class="w-14 h-10 object-cover" />
					<span>{country.name.common}</span>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.foundCountries {
		display: block;
	}
</style>
