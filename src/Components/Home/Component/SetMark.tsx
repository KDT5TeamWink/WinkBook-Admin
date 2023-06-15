import RadioGroup from '@/Common/RadioGroup';
import Radio from '@/Common/Radio';
import { useState } from 'react';
import styles from './SetMark.module.scss';

export default function SetMark() {
  const [display, setDisplay] = useState('F');
  const [selling, setSelling] = useState('F');
  const [exposure, setExposure] = useState('A');
  const [a, setA] = useState(false);
  return (
    <tbody className={styles.wrapper}>
      <tr>
        <th>진열상태</th>
        <td>
          <RadioGroup value={display} onChange={setDisplay}>
            <Radio name="mark" value="T">
              진열함
            </Radio>
            <Radio name="mark" value="F">
              진열안함
            </Radio>
          </RadioGroup>
        </td>
      </tr>

      <tr>
        <th>판매상태</th>
        <td>
          <RadioGroup value={selling} onChange={setSelling}>
            <Radio name="sell" value="T">
              판매함
            </Radio>
            <Radio name="sell" value="F">
              판매안함
            </Radio>
          </RadioGroup>
        </td>
      </tr>

      <tr>
        <th>상품분류 선택</th>
        <td style={{ display: 'flex' }}>
          <div
            onClick={() => {
              setA(!a);
            }}
          >
            국내도서
          </div>
          {a && (
            <ul>
              <li>예술</li>
              <li>아동</li>
              <li>자기계발</li>
              <li>비문학</li>
              <li>소설/시/희극</li>
              <li>경제경영</li>
            </ul>
          )}
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
                    <input type="checkbox" />
                    진열함
                  </label>
                </td>
              </tr>
              <tr>
                <th>신상품</th>
                <td>
                  <label>
                    <input type="checkbox" />
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
