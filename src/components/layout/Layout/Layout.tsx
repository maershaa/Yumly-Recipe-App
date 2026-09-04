import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { Toaster } from 'sonner';

import { HeaderComponent, Footer, Container, Loader } from '@/components';
import { LayoutWrapper } from './Layout.styled';

const Layout = () => {
  const { pathname } = useLocation();

  // При переходе на другую страницу сбрасываем скролл вверх.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return (
    <LayoutWrapper>
      {/* блики на задний план приложения */}
      <Container>
        <HeaderComponent />
      </Container>

      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>

      <Footer />
      <Toaster
        richColors
        position="top-right"
        duration={4000} //длительность автозакрытия
        expand={true} // <--- Включает отображение друг за другом
        visibleToasts={3} // <--- (Опционально) Сколько уведомлений показывать одновременно перед тем, как они начнут скрываться
        toastOptions={{
          style: {
            fontSize: '1.4rem',
            fontWeight: 600,
            lineHeight: 1.4,
          },
        }}
      />
    </LayoutWrapper>
  );
};

export { Layout };
