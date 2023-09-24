type ObjectType = { [key: string]: any };

/**
 * @function validateObject
 * @description Checks if an object has the same structure of another.
 * @param { Object } object - Object to validate.
 * @param { Object } structure - Structure for validation.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/PoXKGPe}
 */

const validateObject = (object: ObjectType, structure: ObjectType) => {
  const { keys } = Object;
  const { isArray } = Array;

  const notFound: string[] = [];
  const extra: string[] = [];
  const wrongType: string[] = [];
  const filterKey = (key: string) => key.replace(/\?$/, '');

  const loop = (obj: ObjectType, struct: ObjectType) => {
    keys(obj).forEach(key => {
      const isExtra = keys(struct).every(structKey => filterKey(structKey) !== key);
      if (isExtra) extra.push(key);
    });

    keys(struct).forEach(structKey => {
      const key = filterKey(structKey);
      const isOptional = structKey.endsWith('?');

      if (!(key in obj)) {
        if (isOptional) return;
        return notFound.push(key);
      }

      const typeOf = typeof obj[key];
      const isStructObject = typeof struct[structKey] === 'object' && !isArray(struct[structKey]);
      const isDataObject = typeof obj[key] === 'object' && !isArray(obj[key]);
      const isStructArray =
        typeof struct[structKey] === 'string' && struct[structKey].includes('[]');
      const isDataArray = isArray(obj[key]);

      const isValidArray = () => {
        if ((struct[structKey] === 'array' || struct[structKey] === '[]') && isDataArray)
          return true;

        if (isStructArray && isDataArray) {
          const structureTypes: string[] = struct[structKey].replace(/[\[\]()]/g, '').split(' | ');
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

      if (isValidArray() || (struct[structKey] === 'object' && isDataObject)) return;
      if (isStructObject && isDataObject) loop(obj[key], struct[structKey]);
      else if (!struct[structKey].split(' | ').includes(typeOf)) wrongType.push(key);
    });
  };

  loop(object, structure);

  return {
    valid: !notFound.length && !extra.length && !wrongType.length,
    notFound,
    extra,
    wrongType,
  };
};

export default validateObject;
