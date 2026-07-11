import { PageTitle } from '@/components';

import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { NotFoundContainer, IconWrapper } from './NotFoundContent.styled';
import { Link } from 'react-router-dom';
const NotFoundContent = () => {
  return (
    <NotFoundContainer>
      <IconWrapper>
        <HiOutlineExclamationCircle />
      </IconWrapper>

      <PageTitle title={404} />

      <h2>Page not found</h2>
      <p>
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Link to={'/'}>Return to home</Link>
    </NotFoundContainer>
  );
};

export { NotFoundContent };
