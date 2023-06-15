import axios from 'axios';
import { getToken, refreshToken } from './Token/token';

const { VITE_CAFE24_ADMIN_URL } = import.meta.env;

const ajax = axios.create({
  baseURL: VITE_CAFE24_ADMIN_URL,
  params: {
    since_product_no: 20,
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

ajax.interceptors.request.use(
  async (config) => {
    const key = new RegExp(`accessToken=([^;]*)`);
    console.log('config', config);
    if (!key.test(document.cookie)) {
      await getToken();
    }
    config.headers['Authorization'] = `Bearer ${
      key.test(document.cookie) ? RegExp.$1 : ''
    }`;

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

ajax.interceptors.response.use(
  (response) => {
    if (response.status === 404) {
      console.log('show 404 error page');
    }
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      const key = new RegExp(`accessToken=([^;]*)`);

      if (!key.test(document.cookie) && !localStorage.getItem('refreshToken')) {
        await getToken();
      } else {
        await refreshToken();
      }
      error.config.headers = {
        Authorization: `Bearer ${key.test(document.cookie) ? RegExp.$1 : ''}`,
      };
      console.log('error', error);
      console.log('error.config', error.config);
    }
  }
);

export default ajax;