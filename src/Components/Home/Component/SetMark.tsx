import RadioGroup from '@/Common/RadioGroup';
import Radio from '@/Common/Radio';
import { useState } from 'react';
import './SetMark.scss';

interface Mark {
  display: string;
  selling: string;
  exposure: string;
  category: string;
  recommand: boolean;
  newProduct: boolean;
}
interface Props {
  setMark: (key: Mark) => void;
}

export default function SetMark({ setMark }: Props) {
  const [display, setDisplay] = useState('F');
  const [selling, setSelling] = useState('F');
  const [exposure, setExposure] = useState('A');
  const [category, setCategory] = useState('');
  const [recommand, setRecommand] = useState(false);
  const [newProduct, setNewProduct] = useState(false);

  setMark({
    display: display,
    selling: selling,
    exposure: exposure,
    category: category,
    recommand: recommand,
    newProduct: newProduct,
  });
  return (
    <tbody className="wrapper">
      <tr>
        <th>진열상태</th>
        <td>
          <RadioGroup value={display} onChange={setDisplay}>
            <Radio name="display" value="T">
              진열함
            </Radio>
            <Radio name="display" value="F">
              진열안함
            </Radio>
          </RadioGroup>
        </td>
      </tr>

      <tr>
        <th>판매상태</th>
        <td>
          <RadioGroup value={selling} onChange={setSelling}>
            <Radio name="selling" value="T">
              판매함
            </Radio>
            <Radio name="selling" value="F">
              판매안함
            </Radio>
          </RadioGroup>
        </td>
      </tr>

      <tr>
        <th>상품분류 선택</th>
        <td>
          <ul
            onClick={(e: React.MouseEvent) => {
              setCategory(
                (e.target as HTMLUListElement).getAttribute('value') as string
              );
            }}
          >
            <li value={45}>예술</li>
            <li value={46}>아동</li>
            <li value={47}>자기계발</li>
            <li value={48}>비문학</li>
            <li value={49}>소설/시/희극</li>
            <li value={50}>경제경영</li>
          </ul>
        </td>
      </tr>

      <tr>
        <th>메인 진열</th>
        <td>
          <table>
            <tbody>
              <tr>
                <th>추천상품</th>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        setRecommand(e.target.checked);
                      }}
                    />
                    진열함
                  </label>
                </td>
              </tr>
              <tr>
                <th>신상품</th>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        setNewProduct(e.target.checked);
                      }}
                    />
                    진열함
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <tr>
        <th>표시제한</th>
        <td>
          <RadioGroup value={exposure} onChange={setExposure}>
            <Radio name="exposure" value="A">
              모두에게 표시
            </Radio>
            <Radio name="exposure" value="M">
              회원에게만 표시
            </Radio>
          </RadioGroup>
        </td>
      </tr>
    </tbody>
  );
}
