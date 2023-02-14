/**
 * @function checkIfImageExists
 * @description Checks if image exists in the URL address provided in the first parameter.
 * @param { string } url - Url.
 * @param { Function } callback - Callback.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/KKKRoyx}
 */

const checkIfImageExists = (url: string, callback: (exists: boolean) => void) => {
  const img = new Image();
  img.src = url;

  if (img.complete) {
    callback(true);
  } else {
    img.onload = () => {
      callback(true);
    };

    img.onerror = () => {
      callback(false);
    };
  }
};

export default checkIfImageExists;
