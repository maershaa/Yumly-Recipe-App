import { TagsList } from './TagsFilter.styled';
import { mainTags } from '@/features/recipes/constants';
const TagsFilter = ({ setSelectedTag, selectedTag }) => {
  return (
    <TagsList>
      <li key={'all'} className={'all' === selectedTag ? 'active' : ''}>
        <button type="button" onClick={() => setSelectedTag('all')}>
          {'all'.toUpperCase()}
        </button>
      </li>
      {mainTags.slice(0, 7).map((tag) => (
        <li
          key={tag.value}
          className={tag.value === selectedTag.value ? 'active' : ''}
        >
          <button
            type="button"
            onClick={() => setSelectedTag(tag.value.toLowerCase())}
          >
            {tag.value.toUpperCase()}
          </button>
        </li>
      ))}
    </TagsList>
  );
};

export { TagsFilter };
