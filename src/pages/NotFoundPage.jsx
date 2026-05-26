import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const NotFoundPage = () => {
  return (
    <div
      className="not-found"
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div className="not-found__content">
        <HiOutlineExclamationCircle className="not-found__icon" />

        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Страница не найдена</h2>

        <p className="not-found__text">
          Извините, но запрашиваемая вами страница не существует или была
          перемещена.
        </p>

        <Link to="/" className="not-found__button">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
