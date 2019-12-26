import { IconName } from '@blueprintjs/core';


export interface SidebarCategory {
  name: string;
  path: string;
  icon: IconName;
}

// Sub-categories for each page
export const categoriesMapping: { [index: string]: SidebarCategory[] } = {
  dashboard: [
    { name: 'logs', path: 'logs', icon: 'list-columns' },
  ],
  inventory: [
    { name: 'categories', path: 'categories', icon: 'list-columns' },
    { name: 'products', path: 'products', icon: 'cube' },
  ],
};
