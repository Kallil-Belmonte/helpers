/**
 * @description Creates a deep copy of an object.
 * @see { @link https://codepen.io/kallil-belmonte/full/rNNdEdB }
 */

const deepCopyObject = (object: Object) => {
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
