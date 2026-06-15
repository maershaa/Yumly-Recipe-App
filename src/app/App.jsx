import { Layout } from '@/components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { PrivateRoute, PublicRoute } from '@/components';
import { useDispatch } from 'react-redux';
import { refreshUser } from '@/app/redux/auth/operations';

const HomePage = lazy(() => import('@/pages/HomePage'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const CheckEmailPage = lazy(() => import('@/pages/CheckEmailPage'));

const RecipesPage = lazy(() => import('@/pages/RecipesPage.jsx'));
const RecipeDetailsPage = lazy(() => import('@/pages/RecipeDetailsPage'));

const MyRecipesPage = lazy(() => import('@/pages/MyRecipesPage'));
const CreateRecipePage = lazy(() => import('@/pages/CreateRecipePage'));
const EditRecipePage = lazy(() => import('@/pages/EditRecipePage'));

const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* Public recipes */}
          <Route path="recipes">
            <Route index element={<RecipesPage />} />
            <Route path=":recipeId" element={<RecipeDetailsPage />} />
          </Route>

          {/* Auth */}
          <Route path="auth" element={<PublicRoute />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          {/* Private Routes Group */}
          <Route path="my-recipes" element={<PrivateRoute />}>
            <Route index element={<MyRecipesPage />} />
            <Route path="new" element={<CreateRecipePage />} />
            <Route path=":recipeId/edit" element={<EditRecipePage />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
