import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { mergeClasses } from '@utils/classUtils';
import { cva } from 'class-variance-authority';

// Button component
const Button = React.forwardRef((props, ref) => {
    const { title = 'Button', size = 'medium', className = '', ...rest } = props;

    // Memoize the class names for performance optimization
    const ButtonVariant = useMemo(
        () =>
            cva('rounded-lg transition duration-200 ease-in-out', {
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
        () => mergeClasses(ButtonVariant({ size }), className),
        [size, className, ButtonVariant],
    );

    return (
        <button ref={ref} className={computedClassNames} aria-label={title} {...rest}>
            {title}
        </button>
    );
});

Button.propTypes = {
    title: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    className: PropTypes.string,
};

export default Button;
