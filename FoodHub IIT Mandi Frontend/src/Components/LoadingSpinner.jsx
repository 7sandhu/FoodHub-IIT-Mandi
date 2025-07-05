import React from 'react';

const LoadingSpinner = ({ size = 'medium', className = '' }) => {
    const sizeClasses = {
        small: 'h-4 w-4',
        medium: 'h-8 w-8',
        large: 'h-12 w-12'
    };

    return (
        <div className={`flex justify-center items-center ${className}`}>
            <div 
                className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-orange-200 border-t-orange-500`}
                role="status"
                aria-label="Loading"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default LoadingSpinner;
