import { IconName } from '@blueprintjs/core';


export interface SidebarCategory {
  name: string;
  icon: IconName;
}

// Categories for Sidebar on each page
export const categoriesMapping: { [index: string]: SidebarCategory[] } = {
  dashboard: [
    { name: 'logs', icon: 'list-columns' },
  ],
  inventory: [
    { name: 'categories', icon: 'list-columns' },
    { name: 'products', icon: 'cube' },
  ],
};
