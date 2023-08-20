/**
 * @function isMoreThanHalfInViewport
 * @description Detects if more than half of the element is in viewport.
 * @param { string } selector - Element selector.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/MWZYYoo}
 */

const isMoreThanHalfInViewport = (selector: string) => {
  const rect = document.querySelector(selector)?.getBoundingClientRect();
  if (!rect) return;

  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  const elementHeight = rect.height;
  const elementWidth = rect.width;

  const visibleHeight = Math.min(elementHeight, viewportHeight - rect.top, rect.bottom);
  const visibleWidth = Math.min(elementWidth, viewportWidth - rect.left, rect.right);

  const visibleArea = visibleHeight * visibleWidth;
  const elementArea = elementHeight * elementWidth;

  return visibleArea / elementArea > 0.5;
};

export default isMoreThanHalfInViewport;
