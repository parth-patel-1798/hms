import React from 'react';

const Model = ({ open, onClose, title, children }) => {
    if (!open) return null; // Do not render if 'open' is false

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-center transition-all duration-300 p-2"
            onClick={() => {
                if (onClose) onClose();
            }}
        >
            <div
                className="relative bg-white rounded-lg shadow-lg max-w-lg w-full"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                {/* Title */}
                <div className="p-2 border-b">
                    <h2 className="text-lg font-semibold">{title || 'Modal Title'}</h2>
                </div>

                {/* Scrollable Content */}
                <div className="p-2 overflow-y-auto max-h-[85vh]">{children}</div>
            </div>
        </div>
    );
};

export default Model;
