import { Link, useLocation } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { useState } from 'react';
import { BackButtonWrapper } from './BackButton.styled';

const BackButton = ({ fallback = '/' }) => {
  const location = useLocation();
  const [backLink] = useState(location.state?.from || fallback);

  /*
    Как работает кнопка Back:

    1. При ПЕРВОМ переходе на страницу (например, Recipes → RecipeDetails)
       передаем:
       state={{ from: location.pathname + location.search }}
       — создаем ссылку, куда нужно вернуться.

    2. При следующих переходах (например, RecipeDetails → Edit)
       передаем:
       state={location.state}
       — просто сохраняем уже существующую ссылку, не заменяя ее новой.

    Поэтому кнопка Back всегда знает, куда вернуть пользователя.
  */

  return (
    <BackButtonWrapper as={Link} to={backLink}>
      <IoMdArrowBack /> Back
    </BackButtonWrapper>
  );
};

export { BackButton };
