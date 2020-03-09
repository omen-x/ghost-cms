import { actionCreator } from '../../app/types';
import { NetworkActionMap } from './types';


const creator = actionCreator<NetworkActionMap>();


export const startFetching = creator.createAction('START_FETCHING');

export const finishFetching = creator.createAction('FINISH_FETCHING');
