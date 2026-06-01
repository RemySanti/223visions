import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout({ children, minimalNav = false, hideFooter = false }) {
  return (
    <>
      <Navbar minimal={minimalNav} />
      <div className="relative z-10 min-h-screen">{children}</div>
      {!hideFooter && <Footer />}
    </>
  );
}
