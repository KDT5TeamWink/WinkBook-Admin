import ajax from '@/Apis/adminAuth';
import CreateProduct from '../CreateProduct/CreateProduct';
import ProductList from '../ProductList/ProductList';

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

export default function Home() {
  return (
    <>
      {/* <CreateProduct /> */}
      <ProductList />
    </>
  );
}
