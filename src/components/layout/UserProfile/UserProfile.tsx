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
  return (
    <UserMenu>
      <Link to={name} className="userInfoBlock">
        <UserAvatarWrapper>
          <span className="avatarLetter">{name[0]?.toUpperCase()}</span>{' '}
          {/* //!at()? */}
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
