import React, { useState, useEffect } from 'react';
import Portal from './Portal';
import { useNavigate, useLocation } from 'react-router-dom';

interface AnimatedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
    delay?: number;
    showLoader?: boolean;
    showUnderline?: boolean;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ to, delay = 200, showLoader = true, showUnderline = true, children, className = '', onClick, ...rest }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isAnimating, setIsAnimating] = useState(false);
    const [progress, setProgress] = useState(0);
    const [underlineVisible, setUnderlineVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const isActive = location.pathname === to;

    useEffect(() => {
        if (!isAnimating) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + (100 / (delay / 50));
            });
        }, 50);

        const timer = setTimeout(() => {
            setProgress(0);
            setIsAnimating(false);
            setUnderlineVisible(true);
            navigate(to);
            // Remove underline after animation completes
            setTimeout(() => setUnderlineVisible(false), 1200);
        }, delay);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [isAnimating, delay, navigate, to]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // allow ctrl/cmd+click or middle click to open in new tab
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        if (isAnimating) return;

        // call user provided onClick (e.g., to close mobile menu)
        try {
            onClick?.(e as any);
        } catch (err) {
            // ignore
        }

        if (!showLoader) {
            navigate(to);
            setUnderlineVisible(true);
            setTimeout(() => setUnderlineVisible(false), 1200);
            return;
        }

        setProgress(0);
        setIsAnimating(true);
    };

    const remainingSeconds = Math.ceil((delay - (progress / 100) * delay) / 1000);

    return (
        <>
            <div
                className="relative group inline-block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <a href={to} onClick={handleClick} className={className} {...rest}>
                    {children}
                </a>
                {showUnderline && (isActive || underlineVisible || isHovered) && (
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded ${isHovered ? 'w-full transition-all duration-300' : 'animate-underline'}`}></div>
                )}
            </div>

            {isAnimating && (
                <Portal>
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                        <div className="flex flex-col items-center gap-6">
                            {/* Animated circles */}
                            <div className="relative w-20 h-20">
                                <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse"></div>
                                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 border-r-blue-400 animate-spin"></div>
                                <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-cyan-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                            </div>
                        </div>
                    </div>
                </Portal>
            )}
        </>
    );
};

export default AnimatedLink;
