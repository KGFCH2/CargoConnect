import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [submitMessage, setSubmitMessage] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitMessage(data.message);
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                setTimeout(() => setSubmitMessage(''), 5000);
            } else {
                setSubmitMessage(data.error || 'Failed to send message');
            }
        } catch (error) {
            setSubmitMessage('Failed to connect to server. Make sure the backend is running.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 dark:from-blue-950 dark:via-slate-900 dark:to-slate-950 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
                        <p className="text-xl text-blue-100 dark:text-slate-300">
                            Have questions? I'm here to help. Contact me anytime for support or inquiries
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8 mb-16">
                        <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl group cursor-pointer">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50">
                                <Phone size={28} className="text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300">Call Us</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-3 transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-300">Available 24/7</p>
                            <a href="tel:+91-9123777679" className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-200">
                                +91-9123777679
                            </a>
                        </div>

                        <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50">
                                <Mail size={28} className="text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300">Email Us</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-3 transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-300">Response within 2 hours</p>
                            <a href="mailto:babinbid05@gmail.com" className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-200">
                                babinbid05@gmail.com
                            </a>
                        </div>

                        <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50">
                                <MapPin size={28} className="text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300">Visit Us</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-300">
                                Belur, Howrah, West Bengal, India - 711202
                            </p>
                        </div>

                        <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50">
                                <Clock size={28} className="text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300">Business Hours</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-300">
                                Mon - Sun<br />24/7 Available
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form and Map */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-10 border border-slate-200 dark:border-slate-700 transition-all duration-500 ease-in-out hover:shadow-2xl dark:hover:shadow-blue-900/30">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="transition-all duration-300 hover:scale-105">
                                    <label className="block text-slate-900 dark:text-white font-semibold mb-3">Your Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="transition-all duration-300 hover:scale-105">
                                        <label className="block text-slate-900 dark:text-white font-semibold mb-3">Email</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="transition-all duration-300 hover:scale-105">
                                        <label className="block text-slate-900 dark:text-white font-semibold mb-3">Phone</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md"
                                            placeholder="+91 9999 999 999"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="transition-all duration-300 hover:scale-105">
                                    <label className="block text-slate-900 dark:text-white font-semibold mb-3">Subject</label>
                                    <input
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md"
                                        placeholder="How can we help?"
                                        required
                                    />
                                </div>

                                <div className="transition-all duration-300 hover:scale-105">
                                    <label className="block text-slate-900 dark:text-white font-semibold mb-3">Message</label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent h-32 resize-none transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md"
                                        placeholder="Tell us more about your query..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white font-bold py-4 rounded-lg transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl dark:shadow-blue-900/30 flex items-center justify-center gap-2 transform hover:scale-105 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                                    title="Send your message to our team"
                                >
                                    <Send size={20} />
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                                {submitMessage && (
                                    <p className={`text-sm text-center mt-4 ${submitMessage.includes('success') || submitMessage.includes('successfully') || submitMessage.includes('sent') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                        {submitMessage}
                                    </p>
                                )}
                            </form>
                        </div>

                        {/* Info */}
                        <div>
                            <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-950 dark:to-slate-900 rounded-2xl p-10 text-white mb-8 transition-all duration-500 ease-in-out hover:shadow-2xl dark:hover:shadow-blue-900/50">
                                <h3 className="text-2xl font-bold mb-6">Why Contact Us?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 transition-all duration-300 hover:scale-105 hover:translate-x-2 group cursor-pointer">
                                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                                            <span className="text-sm font-bold">✓</span>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-1 transition-colors duration-300 group-hover:text-blue-200">Quick Response</p>
                                            <p className="text-blue-100 dark:text-slate-300 transition-colors duration-300 group-hover:text-white">Get answers within 2 hours</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 transition-all duration-300 hover:scale-105 hover:translate-x-2 group cursor-pointer">
                                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                                            <span className="text-sm font-bold">✓</span>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-1 transition-colors duration-300 group-hover:text-blue-200">Expert Support</p>
                                            <p className="text-blue-100 dark:text-slate-300 transition-colors duration-300 group-hover:text-white">Speak with logistics professionals</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 transition-all duration-300 hover:scale-105 hover:translate-x-2 group cursor-pointer">
                                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                                            <span className="text-sm font-bold">✓</span>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-1 transition-colors duration-300 group-hover:text-blue-200">Always Available</p>
                                            <p className="text-blue-100 dark:text-slate-300 transition-colors duration-300 group-hover:text-white">24/7 customer support</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 transition-all duration-300 hover:scale-105 hover:translate-x-2 group cursor-pointer">
                                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                                            <span className="text-sm font-bold">✓</span>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-1 transition-colors duration-300 group-hover:text-blue-200">Personalized Solutions</p>
                                            <p className="text-blue-100 dark:text-slate-300 transition-colors duration-300 group-hover:text-white">Customized logistics services</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <Link
                                to="/book-now"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-blue-900/30 w-full justify-center transform hover:scale-105 hover:-translate-y-1"
                            >
                                <span>Book a Shipment</span>
                                <span className="transition-transform duration-300 hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
