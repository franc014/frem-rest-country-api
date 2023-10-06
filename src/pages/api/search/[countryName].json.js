export async function getStaticPaths() {
  const countriesApiResponse = await fetch(`http://localhost:4321/api/countries.json`);
  const countriesJson = await countriesApiResponse.json();
  function mapCountries(country){
    return {
      params: {countryName : country.name.common.toLowerCase()}
    }
  }
  const countriesParams = countriesJson.countries.map(mapCountries);
  return countriesParams;
}

export async function GET({ params, request }) {

  const api = `https://restcountries.com/v3.1/name/${params.countryName}`;
  const countryAPIResponse = await fetch(api);
  const countries = await countryAPIResponse.json();

  return new Response(
    JSON.stringify({
      countries
    })
  )
}