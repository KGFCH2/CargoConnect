import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 200);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-4 right-6 z-50 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center transition-transform transform hover:-translate-y-1"
        >
            <ChevronUp size={20} />
        </button>
    );
};

export default BackToTop;
