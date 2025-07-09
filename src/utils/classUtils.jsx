// utils/classUtils.js
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { store } from '@store/index';

/**
 * Combines Tailwind CSS classes with conditional logic and merges them.
 * @param {string | string[]} baseClasses - The base Tailwind classes or an array of classes.
 * @param {string | string[]} additionalClasses - Additional classes to be merged.
 * @returns {string} - The final combined and merged class names.
 */
export function mergeClasses(baseClasses, additionalClasses) {
    // Convert inputs to arrays if they are not already
    const baseClassArray = Array.isArray(baseClasses) ? baseClasses : [baseClasses];
    const additionalClassArray = Array.isArray(additionalClasses) ? additionalClasses : [additionalClasses];

    // Use clsx to combine base and additional classes conditionally
    const combinedClasses = clsx(...baseClassArray, ...additionalClassArray);

    // Use twMerge to handle Tailwind conflicts and merge classes
    return twMerge(combinedClasses);
}

/**
 * Checks if the user has the required permission.
 *
 * @param {string | null} permission - The specific permission to check. If null, only "full-access" is checked.
 * @returns {boolean} - Returns true if the user has the required permission or "full-access".
 * @throws {Error} - Throws an error if the user does not have the required permission.
 */
export function checkPermission(permission) {
    const { user } = store.getState().auth;
    const permissions = user.permissions;

    if (permissions.includes('full-access') || permissions.includes(permission)) {
        return true;
    }
    return false;
}
