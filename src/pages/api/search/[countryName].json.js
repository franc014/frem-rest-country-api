export async function getStaticPaths() {
  const countriesApiResponse = await fetch(`https://restcountries.com/v3.1/all`);
  const countriesJson = await countriesApiResponse.json();
  function mapCountries(country){
    return {
      params: {countryName : country.name.common.toLowerCase()}
    }
  }
  const countriesParams = countriesJson.map(mapCountries);
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