// utils
import {
  isPlainObject,
  throws
} from './utils';

/**
 * @function statics
 *
 * @description
 * add static properties to a component and return it
 *
 * @param {Object} staticProperties the properties to assign as static to the Component
 * @returns {function(function): function} the method that decorates the component with the static properties
 */
const statics = (staticProperties) =>
  isPlainObject(staticProperties)
    ? (Component) =>
      typeof Component === 'function'
        ? Object.keys(staticProperties).reduce((EnhancedComponent, property) => {
          // eslint-disable-next-line no-param-reassign
          EnhancedComponent[property] = staticProperties[property];

          return EnhancedComponent;
        }, Component)
        : throws('The component passed is not a function.')
    : throws('You must pass an object of properties to assign statically to the component.');

export default statics;
