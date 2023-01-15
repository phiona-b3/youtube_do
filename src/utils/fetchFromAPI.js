import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
  


const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'bc1bf95a75msh5bf950833d86916p1e7d85jsnedad15776b79',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`,
    options);

    return data;
}