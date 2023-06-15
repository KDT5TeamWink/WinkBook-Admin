import ajax from '@/Apis/adminAuth';
import SetMark from './Component/SetMark';
import SetProductInfo from './Component/SetProductInfo';

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
    <table>
      <SetMark />
      <SetProductInfo />
    </table>
  );
}
