type ObjectType = { [key: string]: any };

/**
 * @function validateObject
 * @description Checks if an object has the same structure of another.
 * @param { Object } object - Object to validate.
 * @param { Object } structure - Structure for validation.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/}
 */

const validateObject = (object: ObjectType, structure: ObjectType) => {
  const { keys } = Object;
  const { isArray } = Array;

  const propertiesNotFound: string[] = [];
  const propertiesWithWrongType: string[] = [];

  const loop = (obj: ObjectType, struct: ObjectType) => {
    keys(struct).forEach(key => {
      if (!(key in obj)) return propertiesNotFound.push(key);

      const typeOf: string = typeof obj[key];
      const isStructObject = typeof struct[key] === 'object' && !isArray(struct[key]);
      const isDataObject = typeof obj[key] === 'object' && !isArray(obj[key]);
      const isStructArray = typeof struct[key] === 'string' && struct[key].includes('[]');
      const isDataArray = isArray(obj[key]);

      const isValidArray = () => {
        if ((struct[key] === 'array' || struct[key] === '[]') && isDataArray) return true;

        if (isStructArray && isDataArray) {
          const structureTypes: string[] = struct[key].replace(/[\[\]()]/g, '').split(' | ');
          let objectTypes: string[] = [
            ...new Set<string>(obj[key].map((item: string) => typeof item)),
          ];

          structureTypes.forEach(item => {
            objectTypes = objectTypes.filter(itemType => itemType !== item);
          });

          return !objectTypes.length;
        }

        return false;
      };

      if (isValidArray() || (struct[key] === 'object' && isDataObject)) return;
      else if (isStructObject && isDataObject) loop(obj[key], struct[key]);
      else if (typeOf !== struct[key]) propertiesWithWrongType.push(key);
    });
  };

  loop(object, structure);

  return {
    valid: !propertiesNotFound.length && !propertiesWithWrongType.length,
    propertiesNotFound,
    propertiesWithWrongType,
  };
};

export default validateObject;
