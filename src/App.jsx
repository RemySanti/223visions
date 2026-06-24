import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout } from './components/Layout';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { BookingSignal } from './components/BookingSignal';
import { StickyBookBar } from './components/StickyBookBar';
import { Ga4PageView } from './components/Ga4PageView';
import { Home } from './pages/Home';

const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })));
const Portfolio = lazy(() => import('./pages/Portfolio').then((m) => ({ default: m.Portfolio })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const ServiceAreas = lazy(() =>
  import('./pages/ServiceAreas').then((m) => ({ default: m.ServiceAreas }))
);
const LocationPage = lazy(() =>
  import('./pages/LocationPage').then((m) => ({ default: m.LocationPage }))
);
const Landing = lazy(() => import('./pages/Landing').then((m) => ({ default: m.Landing })));
const ThankYou = lazy(() => import('./pages/ThankYou').then((m) => ({ default: m.ThankYou })));
const MarketingTierList = lazy(() =>
  import('./components/marketing/MarketingTierListPage').then((m) => ({ default: m.MarketingTierList }))
);
const OwnerDashboard = lazy(() =>
  import('./components/owner/OwnerDashboard').then((m) => ({ default: m.OwnerDashboard }))
);

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-red border-t-transparent" />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.25 }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/services"
              element={
                <Layout>
                  <Services />
                </Layout>
              }
            />
            <Route
              path="/portfolio"
              element={
                <Layout>
                  <Portfolio />
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout>
                  <Contact />
                </Layout>
              }
            />
            <Route
              path="/service-areas"
              element={
                <Layout>
                  <ServiceAreas />
                </Layout>
              }
            />
            <Route
              path="/areas/:slug"
              element={
                <Layout>
                  <LocationPage />
                </Layout>
              }
            />
            <Route path="/landing" element={<Landing />} />
            <Route
              path="/owner"
              element={
                <Layout minimalNav hideFooter>
                  <OwnerDashboard />
                </Layout>
              }
            />
            <Route
              path="/internal/marketing-roadmap"
              element={
                <Layout minimalNav hideFooter>
                  <MarketingTierList />
                </Layout>
              }
            />
            <Route
              path="/thank-you"
              element={
                <Layout>
                  <ThankYou />
                </Layout>
              }
            />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Ga4PageView />
      <ScrollToTop />
      <ScrollProgress />
      <BookingSignal />
      <StickyBookBar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
