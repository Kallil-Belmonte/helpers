type ParamItem = { message: string | ((value: string) => string) };
type ParamItemBoolean = Partial<ParamItem> & { check: boolean };
type ParamItemNumber = Partial<ParamItem> & { check: number };
type ParamItemRegex = Partial<ParamItem> & { check: RegExp };

export type Params = {
  custom?: ParamItem & { isValid: (value: string) => boolean };
  required?: ParamItemBoolean;
  regex?: ParamItemRegex;
  email?: ParamItemBoolean;
  phone?: ParamItemBoolean;
  min?: ParamItemNumber;
  max?: ParamItemNumber;
  number?: ParamItemBoolean;
  lowercase?: ParamItemBoolean;
  uppercase?: ParamItemBoolean;
  specialCharacter?: ParamItemBoolean;
  space?: ParamItemBoolean;
};

type ValidationItem = { isValid: boolean; message: string };

export type Validations = {
  custom?: ValidationItem;
  required?: ValidationItem;
  regex?: ValidationItem;
  email?: ValidationItem;
  phone?: ValidationItem;
  min?: ValidationItem;
  max?: ValidationItem;
  number?: ValidationItem;
  lowercase?: ValidationItem;
  uppercase?: ValidationItem;
  specialCharacter?: ValidationItem;
  space?: ValidationItem;
};

/**
 * @function validate
 * @description Validates a string with multiple options.
 * @param value - Text to be validated.
 * @param params - Validation parameters.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/OJpMRYp}
 */

const validate = (value: string, params: Params) => {
  const { values } = Object;
  const {
    custom,
    required,
    regex,
    email,
    phone,
    min,
    max,
    number,
    lowercase,
    uppercase,
    specialCharacter,
    space,
  } = params || {};
  const validations: Validations = {};

  const getValidation = (isValid: boolean, message: ParamItem['message']): ValidationItem => {
    const messageResult = typeof message === 'function' ? message(value) : message;
    return { isValid, message: isValid ? '' : messageResult };
  };
  const getIsValid = (item: any): boolean => item.isValid;
  const getMessage = (item: any): string => item.message;

  // Custom
  if (typeof custom?.isValid === 'function') {
    const { isValid, message = '' } = custom;
    validations.custom = getValidation(isValid(value), message);
  }

  // Required
  if (required?.check) {
    const { message = 'Required value.' } = required;
    validations.required = getValidation(!!value, message);
  }

  // Regex
  if (regex?.check) {
    const { check, message = 'Invalid value.' } = regex;
    validations.regex = getValidation(check.test(value), message);
  }

  // E-mail
  if (email?.check) {
    const { message = 'Invalid e-mail.' } = email;
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    validations.email = getValidation(emailRegex.test(value), message);
  }

  // Phone
  if (phone?.check) {
    const { message = 'Invalid phone.' } = phone;
    const formattedValue = value?.replace(/[^0-9]/g, '');
    const phoneRegex = /^[0-9]{10,11}$/;
    validations.phone = getValidation(phoneRegex.test(formattedValue), message);
  }

  // Min
  if (min?.check) {
    const { check, message = `Minimum ${min.check} characters.` } = min;
    validations.min = getValidation(value?.length >= check, message);
  }

  // Max
  if (max?.check) {
    const { check, message = `Maximum ${max.check} character${max.check > 1 ? 's' : ''}.` } = max;
    validations.max = getValidation(value?.length <= check, message);
  }

  // Number
  if (number?.check) {
    const { message = 'Does not contain any number.' } = number;
    const numberRegex = /[0-9]/;
    validations.number = getValidation(numberRegex.test(value), message);
  }

  // Lowercase
  if (lowercase?.check) {
    const { message = 'Does not contain any lowercase.' } = lowercase;
    const lowercaseRegex = /[a-z]/;
    validations.lowercase = getValidation(lowercaseRegex.test(value), message);
  }

  // Uppercase
  if (uppercase?.check) {
    const { message = 'Does not contain any uppercase.' } = uppercase;
    const uppercaseRegex = /[A-Z]/;
    validations.uppercase = getValidation(uppercaseRegex.test(value), message);
  }

  // Special Character
  if (specialCharacter?.check) {
    const { message = 'Does not contain any special character.' } = specialCharacter;
    const specialCharacterRegex = /[^\w\s]/;
    validations.specialCharacter = getValidation(specialCharacterRegex.test(value), message);
  }

  // Space
  if (space?.check) {
    const { message = 'Does not contain any space.' } = space;
    const spaceRegex = /[ ]/;
    validations.space = getValidation(spaceRegex.test(value), message);
  }

  return {
    isValid: values(validations).every(getIsValid),
    errorMessages: values(validations).filter(getMessage).map(getMessage),
    ...validations,
  };
};

export default validate;
