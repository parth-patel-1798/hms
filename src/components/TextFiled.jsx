import React from 'react';
import { mergeClasses } from '@utils/classUtils';
import { cva } from 'class-variance-authority';

const TextFiled = () => {
    const InputVariant = cva('outline-none', {
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

    const VariantObject = {
        size: props.size || 'medium',
    };

    return <input type={props.type || 'text'} className={mergeClasses(InputVariant(VariantObject), '')} />;
};

export default TextFiled;
