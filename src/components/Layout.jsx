import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLocation } from 'react-router-dom';

export function Layout({ children, minimalNav = false, hideFooter = false, overlayNav = false }) {
  const { pathname } = useLocation();
  const overlay = overlayNav || pathname === '/';

  return (
    <>
      <Navbar minimal={minimalNav} overlay={overlay} />
      <div className="relative z-10 min-h-screen pb-24">{children}</div>
      {!hideFooter && <Footer />}
    </>
  );
}
