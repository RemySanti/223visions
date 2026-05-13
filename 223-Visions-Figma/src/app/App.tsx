import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Services } from './pages/Services';
import { PhotographyServices } from './pages/PhotographyServices';
import { VideographyServices } from './pages/VideographyServices';
import { Weddings } from './pages/Weddings';
import { StudioRentals } from './pages/StudioRentals';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ServiceAreas } from './pages/ServiceAreas';
import { Buckhead } from './pages/locations/Buckhead';
import { Midtown } from './pages/locations/Midtown';
import { DowntownAtlanta } from './pages/locations/DowntownAtlanta';
import { Decatur } from './pages/locations/Decatur';
import { SandySprings } from './pages/locations/SandySprings';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        <Header />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/photography" element={<PhotographyServices />} />
            <Route path="/services/videography" element={<VideographyServices />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/studio-rentals" element={<StudioRentals />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/service-areas/buckhead" element={<Buckhead />} />
            <Route path="/service-areas/midtown" element={<Midtown />} />
            <Route path="/service-areas/downtown-atlanta" element={<DowntownAtlanta />} />
            <Route path="/service-areas/decatur" element={<Decatur />} />
            <Route path="/service-areas/sandy-springs" element={<SandySprings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
