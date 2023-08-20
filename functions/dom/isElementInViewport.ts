/**
 * @function isElementInViewport
 * @description Detects if element is in viewport.
 * @param { string } selector - Element selector.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/}
 */

const isElementInViewport = (selector: string) => {
  const rect = document.querySelector(selector)?.getBoundingClientRect();
  if (!rect) return false;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  return rect.top < windowHeight && rect.bottom > 0 && rect.left < windowWidth && rect.right > 0;
};

export default isElementInViewport;
