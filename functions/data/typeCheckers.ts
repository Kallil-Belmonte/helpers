/**
 * @function typeCheckers
 * @description Checks the type of the data.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/dyRpNyr}
 */

const { keys } = Object;

export const isBoolean = (value: any) => typeof value === 'boolean';

export const isString = (value: any) => typeof value === 'string';

export const isNumber = (value: any) => typeof value === 'number';

export const isArray = (value: any) => !!value && Array.isArray(value);

export const isObject = (value: any) => value?.constructor === Object;

export const isFunction = (value: any) => typeof value === 'function';

export const isEvent = (value: any) => !!value && keys(value).includes('eventPhase');
