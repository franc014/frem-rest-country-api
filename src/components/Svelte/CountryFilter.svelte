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
</script>

<div class="relative">
	<select
		class="w-full sm:w-auto pl-4 pr-10 py-3 rounded bg-dark-gray/10 dark:bg-dark-blue dark:text-lighter-gray h-full"
		bind:value={selectedRegion}
		on:change={handleSelect}
	>
		<option value="Africa">Africa</option>
		<option value="Americas">Americas</option>
		<option value="Asia">Asia</option>
		<option value="Europe">Europe</option>
		<option value="Oceania">Oceania</option>
	</select>
	<span
		class="bg-dark-gray dark:bg-dark-blue absolute w-10 top-0 right-0 h-full pointer-events-none"
	/>
</div>

<style>
	span::before,
	span::after {
		--size: 0.4rem;
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	span::before {
		border-left: var(--size) solid transparent;
		border-right: var(--size) solid transparent;
		border-bottom: var(--size) solid hsl(var(--color-lighter-gray));
		top: 40%;
	}
	span::after {
		border-left: var(--size) solid transparent;
		border-right: var(--size) solid transparent;
		border-top: var(--size) solid hsl(var(--color-lighter-gray));
		top: 60%;
	}
</style>
