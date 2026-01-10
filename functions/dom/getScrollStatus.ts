/**
 * @function getScrollStatus
 * @description Gets the scroll status of an element.
 * @param element - Element.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/YPKdvvw}
 */

const getScrollStatus = <T extends HTMLElement>(element: T | null) => {
  if (!element)
    return {
      isVerticalScrollable: false,
      isHorizontalScrollable: false,
      isScrollable: false,
      hasVerticalScrollbar: false,
      hasHorizontalScrollbar: false,
      hasScrollbar: false,
      hasVerticalScrollByStyle: false,
      hasHorizontalScrollByStyle: false,
      hasScrollByStyle: false,
    };

  const style = window.getComputedStyle(element);

  const isVerticalScrollable = element.scrollHeight > element.clientHeight;
  const isHorizontalScrollable = element.scrollWidth > element.clientWidth;
  const hasVerticalScrollbar = element.offsetWidth > element.clientWidth;
  const hasHorizontalScrollbar = element.offsetHeight > element.clientHeight;
  const hasVerticalScrollByStyle = style.overflowY === 'scroll' || style.overflowY === 'auto';
  const hasHorizontalScrollByStyle = style.overflowX === 'scroll' || style.overflowX === 'auto';

  return {
    isVerticalScrollable,
    isHorizontalScrollable,
    isScrollable: isVerticalScrollable || isHorizontalScrollable,
    hasVerticalScrollbar,
    hasHorizontalScrollbar,
    hasScrollbar: hasVerticalScrollbar || hasHorizontalScrollbar,
    hasVerticalScrollByStyle,
    hasHorizontalScrollByStyle,
    hasScrollByStyle:
      style.overflow === 'scroll' ||
      style.overflow === 'auto' ||
      hasVerticalScrollByStyle ||
      hasHorizontalScrollByStyle,
  };
};

export default getScrollStatus;
