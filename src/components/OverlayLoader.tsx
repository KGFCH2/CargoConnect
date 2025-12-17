import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';

interface OverlayLoaderProps {
    size?: number;
    label?: string;
    backdropClassName?: string;
}

const OverlayLoader: React.FC<OverlayLoaderProps> = ({ size = 32, label, backdropClassName = 'bg-black/40' }) => {
    const el = React.useMemo(() => document.createElement('div'), []);

    React.useEffect(() => {
        document.body.appendChild(el);
        return () => {
            if (document.body.contains(el)) document.body.removeChild(el);
        };
    }, [el]);

    return ReactDOM.createPortal(
        <div className={`fixed inset-0 z-50 flex items-center justify-center ${backdropClassName}`}>
            <div className="flex items-center justify-center p-4">
                <Loader size={size} label={label} />
            </div>
        </div>,
        el
    );
};

export default OverlayLoader;
