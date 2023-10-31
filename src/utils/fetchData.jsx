export const exerciseOptions = {

        method: 'GET',
        headers: {
            // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            "X-RapidApi-Key":'6b891b22a4msh6b8cb71c6c67eadp1531afjsn98d1d69cf11d',
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
        }
    
};
export const youtubeOptions = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6b891b22a4msh6b8cb71c6c67eadp1531afjsn98d1d69cf11d',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async(url,options) => {
  
  const response = await fetch(url,options);
  const data = await response.json();

  return data;
}

