import SetMark from '../CreateProduct/Component/SetMark';
import SetPrice from '../CreateProduct/Component/SetPrice';
import SetProductInfo from '../CreateProduct/Component/SetProductInfo';

import ajax from '@/Apis/adminAuth';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function EditProduct() {
  const [price, setPrice] = useState<Price>({} as Price);
  const [info, setInfo] = useState<Info>({} as Info);
  const [mark, setMark] = useState<Mark>({} as Mark);
  const { productNo } = useParams();
  const [a, setA] = useState<Price>({} as Price);
  const [b, setB] = useState<Info>({} as Info);

  async function getItem() {
    const res = await ajax.get(`/products/${productNo}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(res);
    const data: ProductInfo = res.data.product;
    setA({
      price: data.price,
      retail: data.retail_price,
      supply: data.supply_price,
    });
    setB({
      product_name: data.product_name,
      internal_product_name: data.internal_product_name,
      supply_product_name: data.supply_product_name,
      summary_description: data.summary_description,
      simple_description: data.simple_description,
      description: data.description,
      product_tag: data.product_tag,
    });
  }
  useEffect(() => {
    getItem();
  }, []);

  return (
    <table>
      <SetMark setMark={setMark} />
      <SetProductInfo setInfo={setInfo} res={b} />
      <SetPrice setPrice={setPrice} res={a} />
    </table>
  );
}
