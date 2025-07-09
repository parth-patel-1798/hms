import React, { useState, useMemo, useRef, useEffect, Children, cloneElement } from 'react';
import { mergeClasses } from '@utils/classUtils';
import { cva } from 'class-variance-authority';
import { MdOutlineClose } from 'react-icons/md';

const MultiSelect = React.forwardRef(
    (
        { children, className = '', size = 'medium', error = false, errorText = '', value = [], onChange, ...rest },
        ref,
    ) => {
        const [isOpen, setIsOpen] = useState(false);
        const [dropdownPosition, setDropdownPosition] = useState('bottom');

        const containerRef = useRef(null);
        const dropdownRef = useRef(null);

        const childArray = useMemo(() => Children.toArray(children), [children]);

        /** Retrieves the label for a given value */
        const getLabelFromValue = (val) => {
            const matchingChild = childArray.find((child) => child.props.value === val || child.props.children === val);
            return matchingChild ? matchingChild.props.children : val;
        };

        /** Toggles selection of an item */
        const toggleSelection = (itemValue) => {
            if (!onChange) return;
            onChange(value.includes(itemValue) ? value.filter((i) => i !== itemValue) : [...value, itemValue]);
        };

        /** Removes a selected item */
        const removeItem = (itemValue, event) => {
            event.stopPropagation();
            if (onChange) onChange(value.filter((i) => i !== itemValue));
        };

        /** Handles dropdown positioning */
        useEffect(() => {
            if (isOpen && containerRef.current && dropdownRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const dropdownRect = dropdownRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                setDropdownPosition(containerRect.bottom + dropdownRect.height > viewportHeight ? 'top' : 'bottom');
            }
        }, [isOpen]);

        /** Closes dropdown when clicking outside */
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (containerRef.current && !containerRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);

        /** Tailwind styling using `cva` */
        const inputClasses = useMemo(
            () =>
                cva('border rounded-md w-full flex flex-wrap gap-2 cursor-pointer', {
                    variants: {
                        size: {
                            small: 'text-sm px-3 py-1.5',
                            medium: 'text-base px-3 py-2',
                            large: 'text-lg px-3 py-3',
                        },
                        error: {
                            true: 'text-red-600 border-red-600',
                            false: '',
                        },
                    },
                    defaultVariants: {
                        size: 'medium',
                        error: 'false',
                    },
                }),
            [],
        );

        const computedClassNames = useMemo(
            () => mergeClasses(inputClasses({ size, error }), className),
            [size, error, className],
        );

        return (
            <div className="relative" ref={containerRef}>
                {/* Selected Items */}
                <div className={computedClassNames} onClick={() => setIsOpen((prev) => !prev)}>
                    {value.length > 0 ? (
                        value.map((itemValue, index) => (
                            <span
                                key={index}
                                className="px-1.5 py-0.5 bg-gray-200 rounded-md inline-flex gap-2 items-center"
                            >
                                <small className="font-medium">{getLabelFromValue(itemValue)}</small>
                                <MdOutlineClose className="cursor-pointer" onClick={(e) => removeItem(itemValue, e)} />
                            </span>
                        ))
                    ) : (
                        <span className="text-gray-400">Select options</span>
                    )}
                </div>

                {/* Dropdown */}
                {isOpen && (
                    <div
                        ref={dropdownRef}
                        className={`absolute right-0 z-10 w-full bg-white border p-2 mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto ${
                            dropdownPosition === 'top' ? 'bottom-full mb-1' : 'top-full mt-1'
                        }`}
                    >
                        {childArray.map((child, index) =>
                            child
                                ? cloneElement(child, {
                                      key: index,
                                      value: child.props.value ?? child.props.children,
                                      onClick: (e) => {
                                          e.stopPropagation();
                                          toggleSelection(child.props.value || child.props.children);
                                      },
                                  })
                                : null,
                        )}
                    </div>
                )}

                {/* Error Message */}
                {error && <p className="text-red-500 text-sm mt-1">{errorText}</p>}
            </div>
        );
    },
);

export default MultiSelect;
