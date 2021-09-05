/**
 * @description Copies the properties from one object to another.
 * @see { @link https://codepen.io/kallil-belmonte/full/mdwVeGX }
 */

type ObjectType = { [key: string | number]: any };

const getPropertiesFromOtherObject = (
  objectToCopyProps: ObjectType,
  firstValueProp: string,
  objectToGetProps: ObjectType,
  secondValueProp: string,
  properties: string[],
) => {
  const { keys, values } = Object;
  const result = { ...objectToGetProps };

  keys(objectToGetProps).forEach(key => {
    const valueToCopy = values(objectToCopyProps).find(
      item => item[firstValueProp] === objectToGetProps[key][secondValueProp],
    );

    if (valueToCopy) {
      properties.forEach(property => (result[key][property] = valueToCopy[property]));
    }
  });

  return result;
};

export default getPropertiesFromOtherObject;
