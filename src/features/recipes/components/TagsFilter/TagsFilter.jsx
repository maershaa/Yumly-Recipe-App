import { TagsList } from './TagsFilter.styled';

const TagsFilter = ({ tags, setSelectedTag, selectedTag }) => {
  return (
    <TagsList>
      <li key={'all'} className={'all' === selectedTag ? 'active' : ''}>
        <button type="button" onClick={() => setSelectedTag('all')}>
          {'all'.toUpperCase()}
        </button>
      </li>
      {tags.slice(0, 7).map((tag) => (
        <li key={tag} className={tag === selectedTag ? 'active' : ''}>
          <button type="button" onClick={() => setSelectedTag(tag)}>
            {tag.toUpperCase()}
          </button>
        </li>
      ))}
    </TagsList>
  );
};

export { TagsFilter };
