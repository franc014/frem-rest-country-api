<script>
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

	$: console.log(searchTerm, { foundCountries });
</script>

<div class="w-full relative">
	<label for="search-country" class="flex items-center gap-4 h-12 w-5/12 rounded shadow bg-white">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6 ml-4"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
			/>
		</svg>
		<input
			id="search-country"
			class="min-h-full w-full text-xs rounded-tr rounded-br pl-4"
			type="text"
			autocomplete=""
			placeholder="Search for a country..."
			on:input={searchCountry}
		/>
	</label>
	<ul class="bg-lighter-gray w-5/12 absolute top-full rounded shadow-xl">
		{#each foundCountries as country}
			<li class="px-2 py-2">
				<a href={`/countries/${country.cca3}`} class="flex items-center gap-4">
					<img src={country.flags.svg} alt={country.name.common} class="w-14 h-10 object-cover" />
					<span>{country.name.common}</span>
				</a>
			</li>
		{/each}
	</ul>
</div>
