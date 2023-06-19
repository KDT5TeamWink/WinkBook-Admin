import ajax from '@/Apis/adminAuth';
import SetMark from './Component/SetMark';
import SetProductInfo from './Component/SetProductInfo';
import SetPrice from './Component/SetPrice';
import { ChangeEvent, useState } from 'react';
import { createProduct } from '@/Apis/createProduct';
import { getImgLink } from '@/Apis/uploadImg';

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
  recommand: string;
  newProduct: string;
}
interface Info {
  product_name: string;
  internal_product_name?: string;
  supply_product_name?: string;
  simple_description?: string;
  description?: string;
  product_tag?: string[];
}

export default function Home() {
  const [price, setPrice] = useState<Price>({} as Price);
  const [info, setInfo] = useState<Info>({} as Info);
  const [imageURL, setImageURL] = useState('');
  const [mark, setMark] = useState<Mark>({} as Mark);

  async function upload(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }
    const url = URL.createObjectURL(e.target.files[0]);
    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    const res = await getImgLink(formData);
    setImageURL(res?.data.data.link);
    console.log(url);
  }

  async function createItem() {
    try {
      const res = await createProduct({
        display: mark.display,
        selling: mark.selling,
        exposure_limit_type: mark.exposure,
        add_category_no: [
          {
            category_no: parseInt(mark.category),
            recommend: mark.recommand,
            new: mark.newProduct,
          },
        ],
        product_name: info.product_name,
        internal_product_name: info.internal_product_name,
        supply_product_name: info.supply_product_name,
        simple_description: info.simple_description,
        description: info.description,
        product_tag: info.product_tag,
        price: price.price,
        retail_price: price.retail,
        supply_price: price.supply,
        detail_image: `https://teamwink/web/${imageURL}`,
        image_upload_type: 'A',
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  //console.log(mark);
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
