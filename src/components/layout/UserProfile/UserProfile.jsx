import {
  UserMenu,
  UserAvatarWrapper,
  StyledTooltip,
} from './UserProfile.styled';

const UserProfile = ({ name, onClick, showFullName = false }) => {
  return (
    <UserMenu>
      <button onClick={onClick}>Logout</button>

      {showFullName ? (
        <span className="userName">{name}</span>
      ) : (
        <UserAvatarWrapper>
          <span className="userName">{name?.[0]?.toUpperCase()}</span>
          <StyledTooltip text={name} />
        </UserAvatarWrapper>
      )}
    </UserMenu>
  );
};

export { UserProfile };
