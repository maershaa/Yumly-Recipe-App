import {
  UserMenu,
  UserAvatarWrapper,
  StyledTooltip,
} from './UserProfile.styled';

interface UserProfileProps {
  name: string;
  onClick: () => void;
}

const UserProfile = ({ name, onClick }: UserProfileProps) => {
  return (
    <UserMenu>
      <div className="userInfoBlock">
        <UserAvatarWrapper>
          <span className="avatarLetter">{name[0]?.toUpperCase()}</span>
          <StyledTooltip text={name} />
        </UserAvatarWrapper>
        <span className="fullName">{name}</span>
      </div>

      <button className="logoutBtn" type="button" onClick={onClick}>
        Logout
      </button>
    </UserMenu>
  );
};

export { UserProfile };
