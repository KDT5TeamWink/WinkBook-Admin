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
    shop_no: 1,
    request: {
      product_name: '',
      price: '',
      supply_price: '',
    },
  },
});

export async function createProduct(info: ProductInfo) {
  try {
    const res = await ajax.post('/products', {
      request: {
        display: info.display,
        selling: info.selling,
        product_name: info.product_name,
        supply_product_name: info.supply_product_name,
        internal_product_name: info.internal_product_name,
        add_category_no: info.add_category_no, // 배열데이터- 추천상품 진열 여부
        product_condition: info.product_condition,
        price: info.price,
        supply_price: info.supply_price,
        retail_price: info.retail_price,
        description: info.description,
        summary_description: info.summary_description,
        simple_description: info.simple_description,
        product_tag: info.product_tag,
        exposure_limit_type: info.exposure_limit_type,
        detail_image: info.detail_image,
        image_upload_type: info.image_upload_type, // A
      },
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
}
