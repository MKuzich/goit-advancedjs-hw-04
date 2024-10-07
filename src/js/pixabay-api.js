import axios from 'axios';

const API_KEY = '27957885-8dff7fee3c243073fce7c6825';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = (query, page) => {
  return axios.get('', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });
};

export default fetchImages;
