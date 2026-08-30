import { PropagateLoader } from 'react-spinners';
import { LoaderWrapper } from './Loader.styled';
const Loader = () => {
  return (
    <LoaderWrapper>
      <PropagateLoader
        size={24}
        color={'#7ab04c'}
        speedMultiplier={0.7}
        aria-label="Loading Spinner"
      />
    </LoaderWrapper>
  );
};

export { Loader };
