import { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Props {
  setInfo: (key: string) => void;
}

export default function SetProductInfo({ setInfo }: Props) {
  const [product_name, setProduct_name] = useState('');
  const [titleAdmin, setTitleAdmin] = useState('');
  const [titleSupply, setTitleSupply] = useState('');

  useEffect(() => {
    setInfo(product_name);
  }, [product_name]);

  function contents(content: string) {
    console.log(content);
  }

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'font',
    'size',
    'header',
    'color',
    'background',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  const aa = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    console.log(aa.current?.value);
  }, []);
  return (
    <tbody>
      <tr>
        <th>
          상품명<span className="required">필수</span>
        </th>
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
          <select name="" id="" ref={aa}>
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
            modules={modules}
            formats={formats}
            style={{ width: '1000px', height: '500px', paddingBottom: '50px' }}
          />
        </td>
      </tr>

      {/* 검색어설정 */}
      <tr>
        <th>검색어 설정</th>
        <td>
          <textarea
            name=""
            id=""
            cols={20}
            rows={3}
            onBlur={(e) => {
              console.log(e.target.value.replaceAll(' ', '').split(','));
            }}
          ></textarea>
        </td>
      </tr>
    </tbody>
  );
}
