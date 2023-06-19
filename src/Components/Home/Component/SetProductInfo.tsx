import { useState, useEffect, ChangeEvent, useCallback } from 'react';
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

interface Info {
  product_name: string;
  internal_product_name?: string;
  supply_product_name?: string;
  simple_description?: string;
  description?: string;
  product_tag?: string[];
}

interface Props {
  setInfo: (key: Info) => void;
}

export default function SetProductInfo({ setInfo }: Props) {
  const [product_name, setProduct_name] = useState<string>();
  const [internal_product_name, setInternal_product_name] = useState<string>();
  const [supply_product_name, setSupply_product_name] = useState<string>();
  const [simple_description, setSimple_description] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [product_tag, setProduct_tag] = useState<string[]>();

  useEffect(() => {
    if (product_name) {
      setInfo({
        product_name: product_name,
        internal_product_name: internal_product_name,
        supply_product_name: supply_product_name,
        simple_description: simple_description,
        description: description,
        product_tag: product_tag,
      });
    }
  }, [
    product_name,
    internal_product_name,
    supply_product_name,
    simple_description,
    description,
    product_tag,
  ]);

  const contents = useCallback(
    (content: string) => {
      setDescription(content);
    },
    [description]
  );

  return (
    <tbody className="info">
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
          />
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
              //console.log(e.target.value.replace(/\s/gi, '').split(','));
              setProduct_tag(e.target.value.replace(/\s/gi, '').split(','));
            }}
          ></textarea>
        </td>
      </tr>
    </tbody>
  );
}
