import { Link } from 'react-router-dom';
import { Redirect } from './RedirectComponent.styled';
const RedirectComponent = ({ spanText, linkText, to }) => {
  return (
    <Redirect>
      <span>{spanText}</span>
      <Link to={to}>{linkText}</Link>
    </Redirect>
  );
};

export { RedirectComponent };
