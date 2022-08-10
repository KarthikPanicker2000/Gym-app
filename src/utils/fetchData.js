export const exerciseOptions =  {

    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '4373019fc5msh1f0ca7114e5ffccp14798fjsn3506b00d96b9',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const fetchData = async (url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}