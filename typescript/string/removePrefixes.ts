/**
 * @description Returns the value without the prefix defined in the second parameter.
 * @see { @link https://codepen.io/kallil-belmonte/full/ZEBpvLy }
 */

const removePrefixes = (value: string, prefix = '0') => {
  let result = String(value);

  const removePrefix = () => {
    if (result[0] === prefix) {
      result = result.substring(1);
      removePrefix();
    }
  };

  removePrefix();

  return result;
};

export default removePrefixes;
