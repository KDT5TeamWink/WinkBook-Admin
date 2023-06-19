import { useState, useEffect, ChangeEvent, useCallback, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Input from '@/Common/Input';

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

interface Props {
  setInfo: (key: Info) => void;
  res?: Info;
}

export default function SetProductInfo({ setInfo, res }: Props) {
  const [product_name, setProduct_name] = useState<string>();
  const [internal_product_name, setInternal_product_name] = useState<string>();
  const [supply_product_name, setSupply_product_name] = useState<string>();
  const [simple_description, setSimple_description] = useState<string>();
  const info = useRef({} as Info);

  useEffect(() => {
    if (res) {
      info.current = res;
      console.log(res, info.current);
    }
  }, [res]);
  useEffect(() => {
    setInfo(info.current);
  }, [info]);

  const contents = useCallback((content: string) => {
    info.current['description'] = content;
  }, []);

  return (
    <tbody
      className="info"
      onBlur={(e) => {
        if (e.target instanceof HTMLInputElement) {
          console.log(e.target.id);
          info.current[e.target.id] = e.target.value;
        } else if (e.target instanceof HTMLTextAreaElement) {
          if (e.target.id === 'summary_description') {
            info.current[e.target.id] = e.target.value;
          } else {
            info.current[e.target.id] = e.target.value
              .replace(/\s/gi, '')
              .split(',');
          }
        }
        console.log('info', info.current);
      }}
    >
      <tr>
        <th>
          상품명<span className="required">필수</span>
        </th>
        <td>
          <Input
            value={product_name}
            maxLength={250}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setProduct_name(e.target.value);
            }}
            id="product_name"
          />
        </td>
      </tr>

      <tr>
        <th>상품명(관리용)</th>
        <td>
          <Input
            value={internal_product_name}
            maxLength={50}
            onChange={(e) => {
              setInternal_product_name(e.target.value);
            }}
            id="internal_product_name"
          />
        </td>
      </tr>

      <tr>
        <th>공급사 상품명</th>
        <td>
          <Input
            value={supply_product_name}
            maxLength={250}
            onChange={(e) => {
              setSupply_product_name(e.target.value);
            }}
            id="supply_product_name"
          />
        </td>
      </tr>

      <tr>
        <th>상품 요약설명</th>
        <td>
          <Input
            value={simple_description}
            maxLength={255}
            onChange={(e) => {
              setSimple_description(e.target.value);
            }}
            id="summary_description"
          />
        </td>
      </tr>

      <tr>
        <th>상품 간략설명</th>
        <td>
          <textarea name="" id="simple_description" cols={20} rows={3} />
        </td>
      </tr>

      <tr>
        <th>상품 상세설명</th>
        <td>
          <ReactQuill
            onChange={contents}
            defaultValue={res?.description}
            modules={modules}
            formats={formats}
            style={{ width: '1000px', height: '500px', paddingBottom: '50px' }}
          />
        </td>
      </tr>

      <tr>
        <th>검색어 설정</th>
        <td>
          <textarea name="" id="Product_tag" cols={20} rows={3} />
        </td>
      </tr>
    </tbody>
  );
}
