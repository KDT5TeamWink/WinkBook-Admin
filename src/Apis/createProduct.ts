import axios from 'axios';

const { VITE_CAFE24_ADMIN_URL } = import.meta.env;

const key = new RegExp(`accessToken=([^;]*)`);
const ajax = axios.create({
  baseURL: VITE_CAFE24_ADMIN_URL,
  headers: {
    Authorization: `Basic ${key.test(document.cookie) ? RegExp.$1 : ''}`,
    'Content-Type': 'application/json',
  },
  data: {
    product_name: '',
    price: '',
    supply_price: '',
  },
});
