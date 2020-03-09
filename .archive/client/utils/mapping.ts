import { IconName } from '@blueprintjs/core';


export interface SidebarCategory {
  name: string;
  path: string;
  icon: IconName;
}

// Sub-categories for each page
export const categoriesMapping: { [index: string]: SidebarCategory[] } = {
  dashboard: [
    { name: 'logs', path: '/dashboard/logs/', icon: 'list-columns' },
  ],
  inventory: [
    { name: 'categories', path: '/inventory/categories/', icon: 'list-columns' },
    { name: 'products', path: '/inventory/products/', icon: 'cube' },
  ],
};

/**
 * @param {string} path - pathname from router
 * @returns {string}
 */
export const mapPathToPage = (path: string): string => {
  if (path === '/' || path === '') return 'dashboard';
  return path.split('/')[1];
};

/**
 * @param {string} path - pathname from router
 * @returns {string}
 */
export const mapPathToCategory = (path: string): string => {
  if (path === '/' || path === '') return '';
  return path.split('/')[2] || '';
};
