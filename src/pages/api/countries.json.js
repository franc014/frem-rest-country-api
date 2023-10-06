export async function GET({ params, request }) {
    
    const fields = `name,population,region,capital,flags,cca3`;
    const countriesAPIResponse = await fetch(`https://restcountries.com/v3.1/all?fields=${fields}`);
    const countries = await countriesAPIResponse.json();

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