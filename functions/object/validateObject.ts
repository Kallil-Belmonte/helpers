type ObjectType = { [key: string]: any };

/**
 * @function validateObject
 * @description Checks if an object has the same structure of another.
 * @param { Object } objectToValidate - Object to validate.
 * @param { Object } schemaForValidation - Schema for validation.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/PoXKGPe}
 */

const validateObject = (objectToValidate: ObjectType, schemaForValidation: ObjectType) => {
  const { keys } = Object;
  const { isArray } = Array;

  const notFound: string[] = [];
  const extra: string[] = [];
  const wrongType: string[] = [];
  const filterKey = (key: string) => key.replace(/\?$/, '');

  const loop = (object: ObjectType, schema: ObjectType) => {
    keys(object).forEach(key => {
      const isExtra = keys(schema).every(schemaKey => filterKey(schemaKey) !== key);
      if (isExtra) extra.push(key);
    });

    keys(schema).forEach(schemaKey => {
      const key = filterKey(schemaKey);
      const isOptional = schemaKey.endsWith('?');

      if (!(key in object)) {
        if (isOptional) return;
        return notFound.push(key);
      }

      const typeOf = typeof object[key];
      const isSchemaObject = typeof schema[schemaKey] === 'object' && !isArray(schema[schemaKey]);
      const isDataObject = typeof object[key] === 'object' && !isArray(object[key]);
      const isSchemaArray =
        typeof schema[schemaKey] === 'string' && schema[schemaKey].includes('[]');
      const isDataArray = isArray(object[key]);

      const isValidArray = () => {
        if ((schema[schemaKey] === 'array' || schema[schemaKey] === '[]') && isDataArray)
          return true;

        if (isSchemaArray && isDataArray) {
          const schemaTypes: string[] = schema[schemaKey].replace(/[\[\]()]/g, '').split(' | ');
          let objectTypes: string[] = [
            ...new Set<string>(object[key].map((item: string) => typeof item)),
          ];

          schemaTypes.forEach(item => {
            objectTypes = objectTypes.filter(itemType => itemType !== item);
          });

          return !objectTypes.length;
        }

        return false;
      };

      if (isValidArray() || (schema[schemaKey] === 'object' && isDataObject)) return;
      if (isSchemaObject && isDataObject) loop(object[key], schema[schemaKey]);
      else if (!schema[schemaKey].split(' | ').includes(typeOf)) wrongType.push(key);
    });
  };

  loop(objectToValidate, schemaForValidation);

  return {
    valid: !notFound.length && !extra.length && !wrongType.length,
    notFound,
    extra,
    wrongType,
  };
};

export default validateObject;
