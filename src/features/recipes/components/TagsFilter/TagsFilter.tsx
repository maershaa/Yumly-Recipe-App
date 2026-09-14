import { TagsList } from './TagsFilter.styled';
import { mainTags } from '@/features/recipes/constants';
import type { MainTagsValue } from '@/types';

interface TagsFilterProps {
  selectedTag: MainTagsValue;
  onClick: (value: MainTagsValue) => void;
}
const TagsFilter = ({ selectedTag, onClick }: TagsFilterProps) => {
  return (
    <TagsList>
      <li key={'all'} className={'all' === selectedTag ? 'active' : ''}>
        <button type="button" onClick={() => onClick('all')}>
          {'all'.toUpperCase()}
        </button>
      </li>
      {mainTags.slice(0, 7).map(({ value }) => (
        <li key={value} className={value === selectedTag ? 'active' : ''}>
          <button type="button" onClick={() => onClick(value)}>
            {value.toUpperCase()}
          </button>
        </li>
      ))}
    </TagsList>
  );
};

export { TagsFilter };
