import { TagsList } from './TagsFilter.styled';

const TagsFilter = ({ tags, setSelectedTag, selectedTag }) => {
  return (
    <TagsList>
      {tags.map((tag) => (
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
