// Performance optimization utilities

import { memo } from 'react';

/**
 * Custom comparison function for React.memo
 * Only re-render if props actually changed
 */
export const arePropsEqual = (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

/**
 * Debounce function for search/filter inputs
 * Reduces unnecessary re-renders and API calls
 */
export const debounce = (func, wait = 300) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Throttle function for scroll events
 * Limits function execution frequency
 */
export const throttle = (func, limit = 100) => {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

/**
 * Lazy load images with intersection observer
 */
export const lazyLoadImage = (imageElement) => {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    if (imageElement) {
        imageObserver.observe(imageElement);
    }
};

export default {
    arePropsEqual,
    debounce,
    throttle,
    lazyLoadImage
};
