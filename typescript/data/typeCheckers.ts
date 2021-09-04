const { keys } = Object;
const { stringify, parse } = JSON;

export const isBoolean = (value: any) => typeof value === 'boolean';

export const isString = (value: any) => typeof value === 'string';

export const isNumber = (value: any) => value === 0 || (!!value && value.constructor === Number);

export const isArray = (value: any) => !!value && value.constructor === Array;

export const isObject = (value: any) =>
  !!value && (value.constructor === Object || parse(stringify(value)).constructor === Object);

export const isEvent = (value: any) => !!value && keys(value).includes('eventPhase');
