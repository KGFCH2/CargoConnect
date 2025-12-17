import React from 'react';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import OverlayLoader from './components/OverlayLoader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ServicesPage from './pages/ServicesPage';
import VehiclesPage from './pages/VehiclesPage';
import PricingPage from './pages/PricingPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import BackToTop from './components/BackToTop';

function App() {
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setInitializing(false), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <ThemeProvider>
      <BookingProvider>
        <Router>
          {initializing && <OverlayLoader size={28} label="Initializing CargoConnect..." backdropClassName="bg-white/95 dark:bg-slate-950/95" />}
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/book-now" element={<BookingPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/vehicles" element={<VehiclesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
            <Footer />
            <BackToTop />
          </div>
        </Router>
      </BookingProvider>
    </ThemeProvider>
  );
}

export default App;