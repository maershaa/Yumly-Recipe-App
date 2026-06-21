import { HeaderComponent } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Container } from '@/components';
import { LayoutWrapper } from './Layout.styled';
import { Loader } from '@/components/ui/Loader/Loader';
import { Suspense } from 'react';
import { Toaster } from 'sonner';

const Layout = () => {
  return (
    <LayoutWrapper>
      {/* блики на задний план приложения */}
      <Container>
        <HeaderComponent />
      </Container>

      <main className="main-content">
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>

      <Footer />
      <Toaster richColors />
    </LayoutWrapper>
  );
};

export { Layout };
