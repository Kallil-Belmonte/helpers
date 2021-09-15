/**
 * @description Creates a deep copy of an object.
 * @see { @link https://codepen.io/kallil-belmonte/full/rNNdEdB }
 */

type ObjectType = { [key: string]: any };

const deepCopyObject = (object: ObjectType): ObjectType => {
  const objectCopy = {};

  for (const property in object) {
    if (
      object[property] !== null &&
      typeof object[property] === 'object' &&
      !Array.isArray(object[property])
    ) {
      objectCopy[property] = deepCopyObject(object[property]);
    } else {
      objectCopy[property] = object[property];
    }
  }

  return objectCopy;
};

export default deepCopyObject;
