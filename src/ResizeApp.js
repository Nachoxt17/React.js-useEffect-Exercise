import React, { useState, useEffect, useCallback } from 'react';

const ResizeApp = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const isMobile = windowWidth < 768;
    const isNotebook = windowWidth < 1366;
    const isDesktopPC = windowWidth < 1920;
    const isTV = windowWidth > 1920;

    useEffect(() => {
        window.addEventListener('resize', () =>
            setWindowWidth(window.innerWidth)
        );
    }, []);

    return (
        <div>
            <h1>ResizeApp</h1>
            <h2>This Window Width is {windowWidth}px</h2>
            {isMobile && <h2>Show This Only in Mobile Devices</h2>}
            {isNotebook && <h2>Show This Only in Notebooks</h2>}
            {isDesktopPC && <h2>Show This Only in Desktop PCs</h2>}
            {isTV && <h2>Show This Only in TVs</h2>}
        </div>
    );
};

export default ResizeApp;
