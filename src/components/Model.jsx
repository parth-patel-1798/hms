import React from 'react';

const Model = ({ open, onClose, title, children }) => {
    if (!open) return null; // Do not render if 'open' is false

    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-all duration-300"
                onClick={() => {
                    if (onClose) onClose();
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center z-40 p-2">
                    <div className="bg-white rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
                        {/* Title */}
                        <div className="p-2">{title || 'Model Title'}</div>
                        <hr />
                        <div className="p-2">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Model;
