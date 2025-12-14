import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: string;
}

const BlogPage: React.FC = () => {
    const posts: BlogPost[] = [
        {
            id: 1,
            title: '10 Tips for Packing Your Cargo Safely',
            excerpt: 'Learn the best practices for packing your cargo to ensure it reaches its destination in perfect condition.',
            date: 'Dec 10, 2024',
            category: 'Shipping Guide'
        },
        {
            id: 2,
            title: 'Cost-Effective Logistics Solutions for Small Business',
            excerpt: 'Discover how small businesses can optimize their shipping costs without compromising on quality.',
            date: 'Dec 8, 2024',
            category: 'Business'
        },
        {
            id: 3,
            title: 'The Future of Logistics: Technology Trends in 2025',
            excerpt: 'Explore the latest technological advancements shaping the logistics industry.',
            date: 'Dec 5, 2024',
            category: 'Technology'
        },
        {
            id: 4,
            title: 'Real-Time Tracking: Why It Matters for Your Business',
            excerpt: 'Understanding the importance of real-time tracking and how it can benefit your logistics operations.',
            date: 'Dec 1, 2024',
            category: 'Features'
        },
        {
            id: 5,
            title: 'Seasonal Shipping: Preparing for Peak Delivery Season',
            excerpt: 'Get ready for the busy season with our comprehensive guide to seasonal logistics planning.',
            date: 'Nov 28, 2024',
            category: 'Seasonal'
        },
        {
            id: 6,
            title: 'Customer Success Story: How We Helped Transform Local Retail',
            excerpt: 'Read how a local retail business increased efficiency by 40% with CargoConnect.',
            date: 'Nov 25, 2024',
            category: 'Success Stories'
        }
    ];

    return (
        <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 dark:from-blue-950 dark:via-slate-900 dark:to-slate-950 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-6">Blog & Insights</h1>
                        <p className="text-xl text-blue-100">
                            Stay updated with the latest logistics trends, tips, and industry news
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 p-6 group cursor-pointer"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 group-hover:scale-105">
                                        {post.category}
                                    </span>
                                    <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                        <Calendar size={14} className="transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                                        {post.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300">{post.title}</h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-200">{post.excerpt}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-950 dark:via-slate-900 dark:to-slate-950 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Subscribe to Newsletter</h2>
                        <p className="text-xl text-blue-100 dark:text-slate-300 mb-10">
                            Get the latest logistics tips, industry insights, and exclusive offers delivered to your inbox
                        </p>

                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-grow px-4 py-4 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500"
                                required
                            />
                            <button
                                type="submit"
                                className="px-8 py-4 bg-blue-950 hover:bg-blue-900 dark:bg-blue-900 dark:hover:bg-blue-800 text-white font-bold rounded-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Ready to Ship?</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
                        Apply what you've learned and start shipping with CargoConnect today
                    </p>
                    <Link
                        to="/book-now"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-blue-900/30"
                    >
                        Book Your First Shipment
                        <span>→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
