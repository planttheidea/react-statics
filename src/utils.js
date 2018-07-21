/**
 * @function isPlainObject
 *
 * @description
 * is the value passed a plain object
 *
 * @param {any} value the value to test
 * @returns {boolean} is the value a plain object
 */
export const isPlainObject = (value) => typeof value === 'object' && !!value && value.constructor === Object;

/**
 * @function throws
 *
 * @description
 * throw a new error with the message provided
 *
 * @throws
 *
 * @param {string} message the error message
 */
export const throws = (message) => {
  throw new ReferenceError(message);
};
