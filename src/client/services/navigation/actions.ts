import { actionCreator } from '../../app/types';
import { NavigationActionMap } from './types';


const creator = actionCreator<NavigationActionMap>();


export const setPageCategory = creator.createAction('SET_PAGE_CATEGORY');
