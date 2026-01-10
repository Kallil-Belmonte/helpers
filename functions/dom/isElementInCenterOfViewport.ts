/**
 * @function isElementInCenterOfViewport
 * @description Detects if the element is in the center of the viewport.
 * @param selector - Element selector.
 * @param acceptableMargin - Acceptable margin in pixels.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/JjwjqgK}
 */

const isElementInCenterOfViewport = (selector: string, acceptableMargin: number = 50) => {
  const rect = document.querySelector(selector)?.getBoundingClientRect();
  if (!rect) return false;
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const elementCenterX = rect.left + rect.width / 2;
  const elementCenterY = rect.top + rect.height / 2;
  const isCenterX = Math.abs(elementCenterX - windowWidth / 2) <= acceptableMargin;
  const isCenterY = Math.abs(elementCenterY - windowHeight / 2) <= acceptableMargin;
  return isCenterX && isCenterY;
};

export default isElementInCenterOfViewport;
