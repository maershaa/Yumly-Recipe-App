// import { Header, Footer, Loader } from '@/shared';
import { HeaderComponent } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <HeaderComponent />

      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export { Layout };
