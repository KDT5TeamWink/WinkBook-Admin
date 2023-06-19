import RadioGroup from '@/Common/RadioGroup';
import Radio from '@/Common/Radio';
import { useEffect, useState } from 'react';
import './SetMark.scss';

interface Mark {
  display: string;
  selling: string;
  exposure: string;
  category: string;
  recommand: string;
  newProduct: string;
}
interface Props {
  setMark: (key: Mark) => void;
  res?: {
    display: string;
    selling: string;
    exposure: string;
    category: string;
    recommand: string;
    newProduct: string;
  };
}

export default function SetMark({ setMark, res }: Props) {
  const [display, setDisplay] = useState('F');
  const [selling, setSelling] = useState('F');
  const [exposure, setExposure] = useState('A');
  const [category, setCategory] = useState('');
  const [recommand, setRecommand] = useState('F');
  const [newProduct, setNewProduct] = useState('F');

  useEffect(() => {
    if (res) {
      setDisplay(res.display);
      setSelling(res.selling);
      setExposure(res.exposure);
      setCategory(res.category);
      setRecommand(res.category);
      setNewProduct(res.newProduct);
    }
  }, []);

  useEffect(() => {
    setMark({
      display: display,
      selling: selling,
      exposure: exposure,
      category: category,
      recommand: recommand,
      newProduct: newProduct,
    });
  }, [display, selling, exposure, category, recommand, newProduct]);
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
        <th>
          상품분류 선택<span className="required">필수</span>
        </th>
        <td>
          <ul
            onClick={(e: React.MouseEvent) => {
              setCategory(`${(e.target as HTMLUListElement).value}`);
              console.log(e.currentTarget.children);
              for (let i = 0; i < e.currentTarget.children.length; i++) {
                e.currentTarget.children[i].classList.remove('selected');
              }
              e.target.classList.add('selected');
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
                        setRecommand(e.target.checked ? 'T' : 'F');
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
                        setNewProduct(e.target.checked ? 'T' : 'F');
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
