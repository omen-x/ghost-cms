/**
 * @param {string)} path - pathname from the router
 * @returns {string}
 */
export const mapPathToPage = (path: string): string => {
  if (path === '/' || path === '') return 'dashboard';
  return path.split('/')[1];
};
