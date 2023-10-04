<script>
  import CountryCard from "./CountryCard.svelte";
</script>

<div class="grid gap-8">
  <CountryCard />
  <CountryCard />
  <CountryCard />
  <CountryCard />
</div>

<style>
  div {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
</style>
