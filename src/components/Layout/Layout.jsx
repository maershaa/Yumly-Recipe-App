// import { Header, Footer, Loader } from '@/shared';
import { HeaderComponent } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Container } from '@/components';
import { LayoutWrapper } from './Layout.styled';
import { Loader } from '@/components/Loader/Loader';
import { Suspense } from 'react';

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
    </LayoutWrapper>
  );
};

export { Layout };
