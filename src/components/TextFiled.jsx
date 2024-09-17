import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { mergeClasses } from '@utils/classUtils';
import { cva } from 'class-variance-authority';

const TextField = React.forwardRef((props, ref) => {
    const { type = 'text', size = 'medium', className = '', ...rest } = props;

    // Memoize the variant generation to improve performance
    const InputVariant = useMemo(
        () =>
            cva('outline-none border rounded transition duration-200 ease-in-out', {
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
            }),
        [],
    );

    const computedClassNames = useMemo(
        () => mergeClasses(InputVariant({ size }), className),
        [size, className, InputVariant],
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
