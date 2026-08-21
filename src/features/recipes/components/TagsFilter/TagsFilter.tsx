import { TagsList } from './TagsFilter.styled';
import { mainTags } from '@/features/recipes/constants';
import type { MainTagsValue } from '@/types';

interface TagsFilterProps {
  setSelectedTag: (value: string) => void;
  selectedTag: MainTagsValue;
}
const TagsFilter = ({ setSelectedTag, selectedTag }: TagsFilterProps) => {
  return (
    <TagsList>
      <li key={'all'} className={'all' === selectedTag ? 'active' : ''}>
        <button type="button" onClick={() => setSelectedTag('all')}>
          {'all'.toUpperCase()}
        </button>
      </li>
      {mainTags.slice(0, 7).map(({ value }) => (
        <li key={value} className={value === selectedTag ? 'active' : ''}>
          <button
            type="button"
            onClick={() => setSelectedTag(value.toLowerCase())}
          >
            {value.toUpperCase()}
          </button>
        </li>
      ))}
    </TagsList>
  );
};

export { TagsFilter };
