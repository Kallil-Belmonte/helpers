/**
 * @description Checks if some object in an array has a specific value.
 * @see { @link https://codepen.io/kallil-belmonte/full/PXdZKE }
 */

const someObjectHasValue = (objects: Object[], property: string, value: any) => {
  const { stringify } = JSON;
  return objects.some(item => stringify(item[property]) === stringify(value));
};

export default someObjectHasValue;
