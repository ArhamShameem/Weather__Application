import axios from 'axios';

const API_KEY = '8d2a110b6ad468ae1a0e459757cf659d';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getweather=async (City,Country)=>{
    try {
        let response = await axios.get(`${API_URL}?q=${City},${Country}&appid=${API_KEY}&units=metric`);
       return response.data
    } catch (error) {
        console.log('Error whiile calling the api',error.message);
        return error.response;
    }
}