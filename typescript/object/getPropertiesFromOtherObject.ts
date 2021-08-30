/**
 * @description Copies the properties from one object to another.
 * @see { @link https://codepen.io/kallil-belmonte/full/mdwVeGX }
 */

const getPropertiesFromOtherObject = (
  objectToCopyProps: Object,
  firstValueProp: string,
  objectToGetProps: Object,
  secondValueProp: string,
  properties: string[],
) => {
  const { keys, values } = Object;
  const result = { ...objectToGetProps };

  keys(objectToGetProps).forEach(key => {
    const valueToCopy = values(objectToCopyProps).find(
      item => item[firstValueProp] === objectToGetProps[key][secondValueProp],
    );

    properties.forEach(property => (result[key][property] = valueToCopy[property]));
  });

  return result;
};

export default getPropertiesFromOtherObject;
