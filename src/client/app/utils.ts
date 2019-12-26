import { ThunkAction } from 'redux-thunk';
import { AppState } from './reducer';
import { Action, ActionMap } from './types';


// TODO: move
export type AppThunk = ThunkAction<void, AppState, null, Action<ActionMap>>;
