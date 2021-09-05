/**
 * @description Checks if two arrays or two objects are equal.
 * @see { @link https://codepen.io/kallil-belmonte/full/oNwzzQw }
 */

type ObjectType = { [key: string | number]: any };

type Value = any[] | ObjectType;

const isEqual = (firstValue: Value, secondValue: Value, checkOrder?: boolean) => {
  const { stringify, parse } = JSON;
  const { keys, values } = Object;

  const isArray = (value: any) => !!value && value.constructor === Array;
  const isObject = (value: any) =>
    !!value && (value.constructor === Object || parse(stringify(value)).constructor === Object);

  if (!checkOrder) {
    if (isArray(firstValue) && isArray(secondValue)) {
      return stringify(values(firstValue).sort()) === stringify(values(secondValue).sort());
    }

    if (isObject(firstValue) && isObject(secondValue)) {
      const orderedObject = (object: ObjectType): ObjectType =>
        keys(object)
          .sort()
          .reduce((accumulator, currentValue) => {
            accumulator[currentValue] = object[currentValue];
            return accumulator;
          }, {});

      return stringify(orderedObject(firstValue)) === stringify(orderedObject(secondValue));
    }
  }

  return stringify(firstValue) === stringify(secondValue);
};

export default isEqual;
