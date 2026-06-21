import { Link, useLocation } from 'react-router-dom';
import { Redirect } from './RedirectComponent.styled';
const RedirectComponent = ({ spanText, linkText, to }) => {
  const location = useLocation();
  return (
    <Redirect>
      {spanText && <span>{spanText}</span>}{' '}
      <Link to={to} state={{ from: location.pathname + location.search }}>
        {linkText}
      </Link>
    </Redirect>
  );
};

export { RedirectComponent };
