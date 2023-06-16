import { useEffect, useState } from 'react';

interface Price {
  [key: string]: string;
  price: string;
  retail: string;
  supply: string;
}
interface Props {
  setPrice: (param: Price) => void;
}

export default function SetPrice({ setPrice }: Props) {
  const [productPrice, setProductPrice] = useState<Price>({} as Price);

  useEffect(() => {
    setPrice(productPrice);
  }, [productPrice]);
  return (
    <tbody
      onBlur={(e) => {
        const name = e.target.getAttribute('name') as string;
        const property = {} as Price;

        if (isNaN(+e.target.value)) {
          alert('숫자만 입력하세요!');
          e.target.value = '';
          return;
        }
        property[name] = e.target.value;

        setProductPrice({ ...productPrice, ...property });
      }}
    >
      <tr>
        <th>소비자가</th>
        <td>
          <input type="text" name="retail" pattern="[0-9]" />
          KRW
        </td>
      </tr>

      <tr>
        <th>
          공급가<span className="required">필수</span>
        </th>
        <td>
          <input type="text" name="supply" />
          KRW
        </td>
      </tr>

      <tr>
        <th>
          판매가<span className="required">필수</span>
        </th>
        <td>
          <table>
            <tbody className="table">
              <tr>
                <th>판매가</th>
                <td>
                  <input type="text" name="price" />
                  KRW
                </td>
              </tr>
              <tr>
                <th>상품가</th>
                <td>
                  {productPrice.price && (+productPrice.price * 0.9).toFixed(0)}
                  KRW
                </td>
              </tr>
              <tr>
                <th>과세금액</th>
                <td>
                  {productPrice.price && (+productPrice.price * 0.1).toFixed(0)}
                  KRW
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  );
}
