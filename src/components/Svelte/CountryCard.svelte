<script>
	export let country;
</script>

	<a
		href={`/countries/${country.cca3}`}
		class=" block shadow-md rounded dark:text-lighter-gray dark:bg-dark-blue"
		
	>
		<img
			class="w-full object-cover rounded-t h-36"
			src={country.flags.svg}
			alt={`Flag of ${country.name.common}`}
		/>
		<div class="pt-4 pb-10 px-5">
			<h2 class="mb-4 font-bold">{country.name.common}</h2>
			<ul class="text-xs flex flex-col gap-2">
				<li>Population: <span>{country.population}</span></li>
				<li>Region: <span>{country.region}</span></li>
				<li>Capital: <span>{'capital' in country ? country.capital[0] : 'N/A'}</span></li>
			</ul>
		</div>
	</a>

<style>
	ul li {
		@apply font-bold;
	}

	ul li span {
		@apply font-normal;
	}
</style>
