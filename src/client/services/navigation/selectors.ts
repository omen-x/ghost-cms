import { AppState } from '../../app/reducer';


export const currentPageCategorySelector = (state: AppState): string => state.navigation.currentPageCategory;
