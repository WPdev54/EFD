// components/ScrollLogger.js
'use client';

import React, { useEffect } from 'react';

const ScrollLogger = () => {
    useEffect(() => {
        const handleScroll = () => {
            console.log(`Vertical Scroll Position: ${window.scrollY}`);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Log initial scroll position
        handleScroll();

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to run effect once on mount

    return null; // Component doesn't render anything
};

export default ScrollLogger;
