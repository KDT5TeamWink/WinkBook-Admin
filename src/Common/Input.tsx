import { ChangeEvent } from 'react';

interface Props {
  value?: string;
  maxLength?: number;
  onChange: (key: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ value, maxLength, onChange }: Props) {
  return (
    <>
      <input
        type="text"
        value={value ? value : ''}
        maxLength={maxLength}
        onChange={onChange}
      />
      {`[ ${value ? value.length : 0} / ${maxLength} ]`}
    </>
  );
}
