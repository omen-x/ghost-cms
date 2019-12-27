import { AppState } from '../../app/reducer';


export const isFetchingSelector = (state: AppState): boolean => state.network.isFetching;
