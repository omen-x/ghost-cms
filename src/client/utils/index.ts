export const updateQueryParams = (params: { [index: string]: (string | number) }): void => {
  const queryParams = new URLSearchParams(window.location.search);

  Object.keys(params).forEach((param) => {
    queryParams.set(param, params[param].toString());
  });

  const { origin, pathname } = window.location;

  window.history.pushState(null, '', `${origin}${pathname}?${queryParams.toString()}`);
};

export const getQueryParam = (param: string): string => {
  const query = new URLSearchParams(window.location.search);

  return query.get(param) || '';
};

/**
 * Calculates and sets width for an element, so the element won't "shrink" after its content updated.
 * Use for elements with dynamic content.
 */
export const fixateElementHeight = (id: string): void => {
  const element = document.getElementById(id);

  if (!element) return console.warn('Element not found');

  element.style.minHeight = `${element.clientHeight}px`;
};
