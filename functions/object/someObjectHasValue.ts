type ObjectType = { [key: string]: any };

/**
 * @function someObjectHasValue
 * @description Checks if some object in an array has a specific value.
 * @param objects - Objects array.
 * @param property - Property to check.
 * @param value - Value to check.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/PXdZKE}
 */

const someObjectHasValue = (objects: ObjectType[], property: string, value: any) =>
  objects.some(item => JSON.stringify(item[property]) === JSON.stringify(value));

export default someObjectHasValue;
