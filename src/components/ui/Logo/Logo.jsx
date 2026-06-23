import { Link } from 'react-router-dom';
import { LogoWrapper } from './Logo.styled';
const Logo = () => {
  return (
    <LogoWrapper as={Link} to="/">
      Yumly
    </LogoWrapper>
  );
};

export { Logo };
