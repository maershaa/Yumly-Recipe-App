// import { Header, Footer, Loader } from '@/shared';
import { HeaderComponent } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Container } from '@/components';
const Layout = () => {
  return (
    <>
      <HeaderComponent />

      <main className="main-content">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export { Layout };
