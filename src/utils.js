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
