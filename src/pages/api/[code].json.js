export async function getStaticPaths() {
  const countriesApiResponse = await fetch(`http://localhost:4321/api/countries.json`);
  const countriesJson = await countriesApiResponse.json();
  function mapCountries(country){
    return {
      params: {code : country.cca2}
    }
  }
  const countriesParams = countriesJson.countries.map(mapCountries);
  return countriesParams;
}

export async function GET({ params, request }) {
 
  const countryAPIResponse = await fetch(`https://restcountries.com/v3.1/alpha/${params.code}`);
  const country = await countryAPIResponse.json();

  return new Response(
    JSON.stringify({
      country: country[0]
    })
  )
}