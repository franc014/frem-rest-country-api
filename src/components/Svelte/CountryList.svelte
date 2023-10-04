<script>
  export let countries;
  import CountryCard from "./CountryCard.svelte";
</script>

<div class="grid gap-14">
  {#if !countries}
    <p class="bg-red-200 w-20 h-20 p-8">No countries data has been fetched</p>
  {/if}
  {#each countries as country}
    <CountryCard {country} />
  {/each}
</div>

<style>
  div {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
</style>
