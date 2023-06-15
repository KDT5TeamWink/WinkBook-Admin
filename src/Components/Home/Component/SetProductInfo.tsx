import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function SetProductInfo() {
  const [product_name, setProduct_name] = useState('');
  const [titleAdmin, setTitleAdmin] = useState('');
  const [titleSupply, setTitleSupply] = useState('');

  function contents(content: string) {
    console.log(content);
  }

  return (
    <tbody>
      <tr>
        <th>상품명(필수)</th>
        <td>
          <input
            type="text"
            value={product_name}
            onChange={(e) => {
              setProduct_name(e.target.value);
            }}
          />
          {`[ ${product_name.length} / 250 ]`}
        </td>
      </tr>

      <tr>
        <th>상품명(관리용)</th>
        <td>
          <input
            type="text"
            value={titleAdmin}
            onChange={(e) => {
              setTitleAdmin(e.target.value);
            }}
          />
          {`[ ${titleAdmin.length} / 50 ]`}
        </td>
      </tr>

      <tr>
        <th>공급사 상품명</th>
        <td>
          <input
            type="text"
            value={titleSupply}
            onChange={(e) => {
              setTitleSupply(e.target.value);
            }}
          />
          {`[ ${titleSupply.length} / 250 ]`}
        </td>
      </tr>

      <tr>
        <th>상품상태</th>
        <td>
          <select name="" id="">
            <option value="N">신상품</option>
            <option value="U">중고상품</option>
          </select>
        </td>
      </tr>

      <tr>
        <th>상품 요약설명</th>
        <td>
          <input type="text" />
        </td>
      </tr>

      <tr>
        <th>상품 간략설명</th>
        <td>
          <textarea name="" id="" cols={20} rows={3}></textarea>
        </td>
      </tr>

      <tr>
        <th>상품 상세설명</th>
        <td>
          <ReactQuill
            onChange={contents}
            style={{ width: '1000px', height: '500px' }}
          />
        </td>
      </tr>

      {/* 검색어설정 */}
      <tr>
        <th>검색어 설정</th>
        <td>
          <textarea name="" id="" cols={20} rows={3}></textarea>
        </td>
      </tr>
    </tbody>
  );
}
