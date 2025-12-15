import React, { useState } from 'react';
import { Truck, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const endpoint = API_URL ? `${API_URL}/api/subscribe` : '/api/subscribe';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribeMessage(data.message);
        setEmail('');
        setTimeout(() => setSubscribeMessage(''), 5000);
      } else {
        setSubscribeMessage(data.error || 'Subscription failed');
      }
    } catch (error) {
      setSubscribeMessage('Failed to connect to server. Make sure the backend is running.');
    } finally {
      setIsSubscribing(false);
    }
  };
  return (
    <footer className="bg-gradient-to-b from-slate-900 dark:from-slate-950 to-black dark:to-black text-white pt-16 pb-8 border-t border-slate-800 dark:border-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Truck size={28} className="text-white" />
              </div>
              <div>
                <span className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">CargoConnect</span>
                <div className="text-xs text-blue-300">Logistics Made Easy</div>
              </div>
            </div>
            <p className="text-slate-400 dark:text-slate-500 mb-6 leading-relaxed group-hover:text-slate-300 dark:group-hover:text-slate-400 transition-colors duration-300">
              India's most reliable logistics partner for efficient, safe, and transparent cargo transportation across the country.
            </p>
            <div className="flex gap-4">
              <a href="mailto:babinbid05@gmail.com" className="p-2 bg-slate-800 dark:bg-slate-700 hover:bg-green-600 dark:hover:bg-green-600 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-6" title="Send email">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/babin-bid-853728293/" className="p-2 bg-slate-800 dark:bg-slate-700 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-6" title="LinkedIn Profile">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/KGFCH2" className="p-2 bg-slate-800 dark:bg-slate-700 hover:bg-slate-600 dark:hover:bg-slate-600 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-6" title="GitHub Profile">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/pricing" className="text-slate-400 dark:text-slate-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors font-medium group inline-flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <span className="ml-2">Pricing & Rates</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 dark:text-slate-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors font-medium group inline-flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <span className="ml-2">FAQ</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 dark:text-slate-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors font-medium group inline-flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <span className="ml-2">Writeup</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 dark:text-slate-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors font-medium group inline-flex items-center">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <span className="ml-2">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin size={20} className="text-blue-400 dark:text-blue-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-slate-400 dark:text-slate-500 group-hover:text-slate-300 dark:group-hover:text-slate-400 transition-colors">
                  Belur, Howrah, West Bengal, India - 711202
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={20} className="text-blue-400 dark:text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+91-9123777679" className="text-slate-400 dark:text-slate-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors font-medium">
                  +91-9123777679
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={20} className="text-blue-400 dark:text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:babinbid05@gmail.com" className="text-slate-400 dark:text-slate-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors font-medium">
                  babinbid05@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-slate-400 dark:text-slate-500 mb-4 text-sm leading-relaxed">
              Subscribe for exclusive offers, logistics tips, and service updates delivered to your inbox.
            </p>
            <form className="space-y-3" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 dark:bg-slate-700 border border-slate-700 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 dark:placeholder-slate-600 transition-all hover:border-slate-600 dark:hover:border-slate-500"
                required
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white font-bold py-3 rounded-lg transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                title="Subscribe to our newsletter for updates"
              >
                {isSubscribing ? <Loader label="Subscribing..." /> : 'Subscribe'}
              </button>
              {subscribeMessage && (
                <p className={`text-sm text-center ${subscribeMessage.includes('success') || subscribeMessage.includes('Successfully') || subscribeMessage.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
                  {subscribeMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-slate-900 pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6 items-center">
            <div className="text-center text-slate-400 dark:text-slate-500 text-sm">
              <p className="font-bold text-white mb-2">Our Promise:</p>
              <p>Transparent pricing • Safe transport • Professional service • 24/7 support</p>
            </div>

            <div className="text-center text-slate-400 dark:text-slate-500 text-sm">
              <p className="mb-2">
                <Link to="/privacy" className="hover:text-blue-400 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link>
                <span className="mx-2">•</span>
                <Link to="/terms" className="hover:text-blue-400 dark:hover:text-blue-400 transition-colors">Terms of Service</Link>
              </p>
              <p className="text-slate-500 dark:text-slate-600 text-sm">© 2025 CargoConnect. All rights reserved.</p>
            </div>

            <div className="text-center text-slate-400 dark:text-slate-500 text-sm">
              <p className="font-bold text-white mb-2">Trusted By:</p>
              <p>1000+ businesses • 50000+ happy customers • 25+ cities</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;