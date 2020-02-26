/**
 * Calculates and sets width for an element, so the element won't "shrink" after its content updated.
 * Use for elements with dynamic content.
 */
export const fixateElementHeight = (id: string): void => {
  const element = document.getElementById(id);

  if (!element) return console.warn('Element not found');

  element.style.minHeight = `${element.clientHeight}px`;
};
