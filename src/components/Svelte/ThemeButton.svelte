<script>
	import DarkModeIcon from './DarkModeIcon.svelte';
	import LightModeIcon from './LightModeIcon.svelte';
	import { theme } from './store';
	function changeTheme() {
		$theme === 'dark' ? setLightTheme() : setDarkTheme();
	}

	function setLightTheme() {
		theme.update(() => 'light');
	}

	function setDarkTheme() {
		theme.update(() => 'dark');
	}
</script>

<button class="flex gap-3 items-center text-sm capitalize" on:click={changeTheme}>
	{#if $theme === 'dark'}
		<LightModeIcon />
	{:else}
		<DarkModeIcon />
	{/if}

	{$theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
</button>
