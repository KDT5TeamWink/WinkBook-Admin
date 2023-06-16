import ajax from '@/Apis/adminAuth';
import SetMark from './Component/SetMark';
import SetProductInfo from './Component/SetProductInfo';
import SetPrice from './Component/SetPrice';
import { ChangeEvent, useRef, useState } from 'react';
import { createProduct } from '@/Apis/createProduct';

const params = new URLSearchParams(location.search);
async function auth() {
  try {
    const res = await ajax.get('/products');
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
if (params.get('code')) {
  auth();
}

interface Price {
  [key: string]: string | undefined;
  price: string;
  retail: string;
  supply: string;
}
interface Mark {
  display: string;
  selling: string;
  exposure: string;
  category: string;
  recommand: boolean;
  newProduct: boolean;
}

export default function Home() {
  const [price, setPrice] = useState<Price>({} as Price);
  const [info, setInfo] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [mark, setMark] = useState<Mark>({} as Mark);

  function upload(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }
    const url = URL.createObjectURL(e.target.files[0]);
    setImageURL(url);
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    console.log(formData.get('image'));
    console.log(e.target.files[0]);
  }

  async function createItem() {
    try {
      const res = await createProduct({
        product_name: info,
        price: price.price,
        retail_price: price.retail,
        supply_price: price.supply,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <table>
        <SetMark setMark={setMark} />
        <SetProductInfo setInfo={setInfo} />
        <SetPrice setPrice={setPrice} />
      </table>
      <div>
        <img
          src={imageURL}
          alt=""
          style={{ aspectRatio: 'auto', height: '110px' }}
        />
        <input type="file" accept="image/*" onChange={upload} />
        <button
          onClick={() => {
            console.log(price, info);
            createItem();
          }}
        >
          submit
        </button>
      </div>
    </>
  );
}
