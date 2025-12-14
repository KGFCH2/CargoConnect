import React from 'react';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
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
          {initializing && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 dark:bg-slate-950/95">
              <div className="text-center">
                <Loader size={28} label="Initializing CargoConnect..." />
              </div>
            </div>
          )}
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
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </BookingProvider>
    </ThemeProvider>
  );
}

export default App;