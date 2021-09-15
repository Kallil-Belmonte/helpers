/**
 * @description Checks if some object in an array has a specific value.
 * @see { @link https://codepen.io/kallil-belmonte/full/PXdZKE }
 */

type ObjectType = { [key: string]: any };

const someObjectHasValue = (objects: ObjectType[], property: string, value: any) =>
  objects.some(item => JSON.stringify(item[property]) === JSON.stringify(value));

export default someObjectHasValue;
