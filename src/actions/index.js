import axios from 'axios'

// we only change our application state through actions and reducers

const API_KEY = '93f44c2630c2b68774515249450fc918';
// ES 6 backtick ` syntax
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url=`${ROOT_URL}&q=${city},us`;
    //ajax request
    const request = axios.get(url);
    console.log('Request:', request);
    return {
        // for reducer to handle our action type
        type: FETCH_WEATHER,
        payload: request
    };
}
