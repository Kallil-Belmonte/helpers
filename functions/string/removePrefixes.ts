/**
 * @function removePrefixes
 * @description Returns the value without the prefix defined in the second parameter.
 * @param { string } value - Text.
 * @param { string } [prefix=0] - Prefix to be removed from text.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/ZEBpvLy}
 */

const removePrefixes = (value: string, prefix = '0') => {
  let result = value;

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
