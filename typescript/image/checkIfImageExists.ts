/**
 * @description Checks if image exists in the URL address provided in the first parameter.
 * @see { @link https://codepen.io/kallil-belmonte/full/KKKRoyx }
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
