import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const gethPhotos = (searchValue, page) => {
  const axiosOptions = {
    params: {
      q: searchValue,
      orientation: 'portrait',
      page: page,
      per_page: 15,
      key: '39461522-3585b4ffe1c253549e3ec0e9b',
    },
  };

  return axios.get('', axiosOptions);
};
