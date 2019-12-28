import { AppState } from '../../app/reducer';


export const currentPageCategorySelector = (state: AppState) => state.navigation.currentPageCategory;
