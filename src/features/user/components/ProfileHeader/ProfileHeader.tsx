import {
  ProfileHeaderContainer,
  ProfileHeaderMain,
  ProfileAvatar,
  ProfileGreeting,
  ProfileDescription,
} from './ProfileHeader.styled';

interface ProfileHeaderProps {
  name: string;
}
export const ProfileHeader = ({ name }: ProfileHeaderProps) => {
  if (!name) return;
  const firstNameLetter = name.trim().at(0)?.toUpperCase();
  return (
    <ProfileHeaderContainer>
      <ProfileHeaderMain>
        <ProfileAvatar>{firstNameLetter}</ProfileAvatar>{' '}
        <ProfileGreeting>
          <h1 className="greetingTitle">
            Hello, <span>{name}!</span>
          </h1>
          <p className="greetingSubtitle">Collect recipes, create memories.</p>
        </ProfileGreeting>
      </ProfileHeaderMain>

      <ProfileDescription>
        Your personal space for all things delicious.
      </ProfileDescription>
    </ProfileHeaderContainer>
  );
};
