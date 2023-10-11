<script>
	import { onMount } from 'svelte';
	import { region } from './store.js';

	let selectedRegion = '';

	onMount(function mountComponent() {
		selectedRegion = $region;
	});

	function handleSelect() {
		region.update(() => selectedRegion);
	}

	//$: console.log('reg', $region);
</script>

<select bind:value={selectedRegion} on:change={handleSelect}>
	<option value="Africa">Africa</option>
	<option value="Americas">Americas</option>
	<option value="Asia">Asia</option>
	<option value="Europe">Europe</option>
	<option value="Oceania">Oceania</option>
</select>
