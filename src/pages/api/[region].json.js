export async function getStaticPaths(){

  return [
    {
      params: {region : 'Africa'}
    },
    {
      params: {region : 'Americas'}
    },
    {
      params: {region : 'Asia'}
    },
    {
      params: {region : 'Europe'}
    },
    {
      params: {region : 'Oceania'}
    }
  ]
  
}

export async function GET({params}) {
  const api = `https://restcountries.com/v3.1/region/${params.region}`;
  const countryAPIResponse = await fetch(api);
  const countries = await countryAPIResponse.json();

  const countriesJSON = JSON.stringify(countries);

  const countriesArray = JSON.parse(countriesJSON);

  const sortedCountries = countriesArray.sort((a, b) => {
        return b.name.common < a.name.common ? 1 : -1;
    })

  return new Response(
    JSON.stringify({
      countries: sortedCountries
    })
  )    
}