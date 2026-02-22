import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Home from './pages/Home';
import Dictionary from './pages/Dictionary';
import CaseStudies from './pages/CaseStudies';
import SecurityExplained from './pages/SecurityExplained';
import JoinFree from './pages/JoinFree';
import ContactUs from './pages/ContactUs';

export default function Router() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/security-explained" element={<SecurityExplained />} />
            <Route path="/join-free" element={<JoinFree />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
