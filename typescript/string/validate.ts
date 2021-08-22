/**
 * @description Validates a string with multiple options.
 * @see { @link https://codepen.io/kallil-belmonte/full/OJpMRYp }
 */

type ConfigItem = { message: string };
type ConfigItemBoolean = ConfigItem & { check: boolean };
type ConfigItemNumber = ConfigItem & { check: number };
type ConfigItemRegex = ConfigItem & { check: RegExp };

type Config = {
  regex?: ConfigItemRegex;
  email?: ConfigItemBoolean;
  min?: ConfigItemNumber;
  max?: ConfigItemNumber;
  number?: ConfigItemBoolean;
  lowercase?: ConfigItemBoolean;
  uppercase?: ConfigItemBoolean;
  specialCharacter?: ConfigItemBoolean;
  space?: ConfigItemBoolean;
};

type ValidationItem = { isValid: boolean; message: string };

type Validations = {
  regex?: ValidationItem;
  email?: ValidationItem;
  min?: ValidationItem;
  max?: ValidationItem;
  number?: ValidationItem;
  lowercase?: ValidationItem;
  uppercase?: ValidationItem;
  specialCharacter?: ValidationItem;
  space?: ValidationItem;
};

const validate = (value: string, config: Config = {}) => {
  const { values } = Object;
  const { regex, email, min, max, number, lowercase, uppercase, specialCharacter, space } = config;
  const validations: Validations = {};

  const getValidation = (isValid: boolean, message: string): ValidationItem => ({
    isValid,
    message: isValid ? '' : message,
  });
  const getIsValid = (item: any): boolean => item.isValid;
  const getMessage = (item: any): string => item.message;

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

  // Min
  if (min?.check) {
    const { check, message = `Minimum ${min.check} characters.` } = min;
    validations.min = getValidation(value.length >= check, message);
  }

  // Max
  if (max?.check) {
    const { check, message = `Maximum ${max.check} character${max.check > 1 ? 's' : ''}.` } = max;
    validations.max = getValidation(value.length <= check, message);
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
