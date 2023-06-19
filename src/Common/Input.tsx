import { ChangeEvent } from 'react';

interface Props {
  value?: string;
  maxLength?: number;
  onChange: (key: ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

export default function Input({ value, maxLength, onChange, id }: Props) {
  return (
    <>
      <input
        type="text"
        value={value ? value : ''}
        maxLength={maxLength}
        onChange={onChange}
        id={id}
      />
      {`[ ${value ? value.length : 0} / ${maxLength} ]`}
    </>
  );
}
