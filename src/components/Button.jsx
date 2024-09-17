import React from 'react';
import { mergeClasses } from '@utils/classUtils';
import { cva } from 'class-variance-authority';

// Button component
const Button = (props) => {
    const { title, size, className, ...rest } = props;
    const ButtonVariant = cva('rounded-lg transition duration-200 ease-in-out', {
        variants: {
            size: {
                small: 'text-sm px-3 py-1.5',
                medium: 'text-base px-4 py-2',
                large: 'text-lg px-5 py-3',
            },
        },
        defaultVariants: {
            size: 'medium',
        },
    });

    return (
        <button className={mergeClasses(ButtonVariant({ size: size || 'medium' }), className)} {...rest}>
            {title || 'Button'}
        </button>
    );
};

export default Button;

// ButtonVariant using class-variance-authority (CVA)
