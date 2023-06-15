import { useContext } from 'react';
import RadioContext from './RadioContext';

interface Props {
  children: string;
  value: string;
  name: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

export default function Radio({
  children,
  value,
  name,
  defaultChecked,
  disabled,
}: Props) {
  const group = useContext(RadioContext);
  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled || group.disabled}
        checked={group.value !== undefined ? value === group.value : undefined}
        onChange={(e) => group.onChange && group.onChange(e.target.value)}
      />
      {children}
    </label>
  );
}
