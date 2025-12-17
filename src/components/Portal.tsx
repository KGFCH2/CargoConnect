import React from 'react';
import ReactDOM from 'react-dom';

const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const el = React.useMemo(() => document.createElement('div'), []);

    React.useEffect(() => {
        document.body.appendChild(el);
        return () => {
            if (document.body.contains(el)) document.body.removeChild(el);
        };
    }, [el]);

    return ReactDOM.createPortal(<>{children}</>, el);
};

export default Portal;
