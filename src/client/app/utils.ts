import { ThunkAction } from 'redux-thunk';
import { AppState } from './reducer';
import { Action, ActionMap } from './types';


export type AppThunk = ThunkAction<void, AppState, null, Action<ActionMap>>;
