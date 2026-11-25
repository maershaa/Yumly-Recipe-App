import {
  UserMenu,
  UserAvatarWrapper,
  StyledTooltip,
} from './UserProfile.styled';
import { Link } from 'react-router-dom';
interface UserProfileProps {
  name: string;
  onClick: () => void;
}

const UserProfile = ({ name, onClick }: UserProfileProps) => {
  const firstNameLetter = name.trim().at(0)?.toUpperCase();

  return (
    <UserMenu>
      <Link to={name} className="userInfoBlock">
        <UserAvatarWrapper>
          <span className="avatarLetter">{firstNameLetter}</span>
          <StyledTooltip text={name} />
        </UserAvatarWrapper>
        <span className="fullName">{name}</span>
      </Link>

      <button className="logoutBtn" type="button" onClick={onClick}>
        Logout
      </button>
    </UserMenu>
  );
};

export { UserProfile };
