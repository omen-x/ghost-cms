import { AppState } from '../../app/reducer';


export const isFetchingSelector = (state: AppState) => state.network.isFetching;
