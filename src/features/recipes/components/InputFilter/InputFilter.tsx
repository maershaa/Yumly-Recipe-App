import { FiSearch } from 'react-icons/fi';
import { Input, InputWrapper, SearchIcon } from './InputFilter.styled';
import { ChangeEvent } from 'react';

type InputTypes = 'text' | 'password' | 'email';

interface InputFilterProps {
  type: InputTypes;
  name: string;
  placeholder: string;
  filterValue: string;
  setFilterValue: (value: string) => void;
}

const InputFilter = ({
  type,
  name,
  placeholder,
  filterValue,
  setFilterValue,
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
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
    </InputWrapper>
  );
};

export { InputFilter };
