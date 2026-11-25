import { HeaderWrapper, UserAvatarWrapper } from './ProfileHeader.styled';

interface ProfileHeaderProps {
  name: string;
}
export const ProfileHeader = ({ name }: ProfileHeaderProps) => {
  if (!name) return;
  const firstNameLetter = name.at(0).toUpperCase();
  return (
    <HeaderWrapper>
      <UserAvatarWrapper className="content">
        <span className="avatarLetter">{firstNameLetter}</span>
      </UserAvatarWrapper>{' '}
      <h1>
        Hello, <span>{name}</span>!
      </h1>
    </HeaderWrapper>
  );
};
