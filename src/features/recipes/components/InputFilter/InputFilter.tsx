import { FiSearch } from 'react-icons/fi';
import { Input, InputWrapper, SearchIcon } from './InputFilter.styled';
import type { ChangeEvent } from 'react';

type InputTypes = 'text' | 'password' | 'email';
interface InputFilterProps {
  type: InputTypes;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const InputFilter = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}: InputFilterProps) => {
  return (
    <InputWrapper>
      <SearchIcon>
        <FiSearch size={18} />
      </SearchIcon>

      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export { InputFilter };
