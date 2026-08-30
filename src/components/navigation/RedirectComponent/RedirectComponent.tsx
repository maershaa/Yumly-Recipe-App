import { Link, useLocation } from 'react-router-dom';
import { Redirect } from './RedirectComponent.styled';

interface RedirectComponentProps {
  spanText?: string;
  linkText: string;
  to: string;
}

const RedirectComponent = ({
  spanText,
  linkText,
  to,
}: RedirectComponentProps) => {
  const location = useLocation();
  return (
    <Redirect>
      {spanText && <span>{spanText}</span>}
      <Link to={to} state={{ from: location.pathname + location.search }}>
        {linkText}
      </Link>
    </Redirect>
  );
};

export { RedirectComponent };
