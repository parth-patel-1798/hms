import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { mergeClasses } from '@utils/classUtils';
import { cva } from 'class-variance-authority';

const TextField = React.forwardRef((props, ref) => {
    const { type = 'text', size = 'medium', className = '', error = false, ...rest } = props;

    // Memoize the variant generation to improve performance
    const InputVariant = useMemo(
        () =>
            cva('rounded-md border outline-none w-full', {
                variants: {
                    size: {
                        small: 'text-sm px-3 py-1.5',
                        medium: 'text-base px-4 py-2',
                        large: 'text-lg px-5 py-3',
                    },
                    error: {
                        true: 'text-red-500 border-red-500',
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
        () => mergeClasses(InputVariant({ size, error }), className),
        [size, error, className, InputVariant],
    );

    return (
        <input
            ref={ref}
            type={type}
            className={computedClassNames}
            aria-label={props['aria-label'] || 'Text input'}
            {...rest}
        />
    );
});

TextField.propTypes = {
    type: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    className: PropTypes.string,
    'aria-label': PropTypes.string,
};

export default TextField;
