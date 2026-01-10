type ObjectType = { [key: string]: any };

type Value = string | boolean | any[] | ObjectType;

/**
 * @function isEqual
 * @description Checks if two values are equal.
 * @param firstValue - First value.
 * @param secondValue - Second value.
 * @param checkOrder - If true, also checks the values order.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/oNwzzQw}
 */

const isEqual = (firstValue: Value, secondValue: Value, checkOrder?: boolean) => {
  const { stringify, parse } = JSON;
  const { keys } = Object;

  const isArray = (value: any) => !!value && value.constructor === Array;
  const isObject = (value: any) =>
    !!value && (value.constructor === Object || parse(stringify(value)).constructor === Object);

  if (!checkOrder) {
    if (isArray(firstValue) && isArray(secondValue)) {
      const orderedArray = (array: any): any[] => array.map((item: any) => stringify(item)).sort();
      return stringify(orderedArray(firstValue)) === stringify(orderedArray(secondValue));
    }

    if (isObject(firstValue) && isObject(secondValue)) {
      const orderedObject = (object: any): ObjectType =>
        keys(object)
          .sort((a, b) => a.localeCompare(b))
          .reduce((accumulator, value) => {
            accumulator[value] = object[value];
            return accumulator;
          }, {});
      return stringify(orderedObject(firstValue)) === stringify(orderedObject(secondValue));
    }
  }

  return stringify(firstValue) === stringify(secondValue);
};

export default isEqual;
