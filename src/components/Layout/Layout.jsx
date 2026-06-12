// import { Header, Footer, Loader } from '@/shared';
import { HeaderComponent } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Container } from '@/components';
import { LayoutWrapper } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutWrapper>
      {/* блики на задний план приложения */}
      <Container>
        <HeaderComponent />
      </Container>

      <main className="main-content">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </LayoutWrapper>
  );
};

export { Layout };
