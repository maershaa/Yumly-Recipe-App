import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'sonner';

import { HeaderComponent, Footer, Container, Loader } from '@/components';
import { LayoutWrapper } from './Layout.styled';

const Layout = () => {
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
        closeButton={true}
        onAutoClose
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
