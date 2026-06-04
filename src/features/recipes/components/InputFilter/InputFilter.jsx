import { FiSearch } from 'react-icons/fi';
import { Input, InputWrapper, SearchIcon } from './InputFilter.styled';
const InputFilter = ({
  type,
  name,
  placeholder,
  filterValue,
  setFilterValue,
}) => {
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
