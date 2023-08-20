/**
 * @function isFullyElementInViewport
 * @description Detects if the whole element is in viewport.
 * @param { string } selector - Element selector.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/oNJNRrY}
 */

const isFullyElementInViewport = (selector: string) => {
  const rect = document.querySelector(selector)?.getBoundingClientRect();
  if (!rect) return false;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export default isFullyElementInViewport;
