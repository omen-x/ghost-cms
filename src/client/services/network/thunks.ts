import { startFetching, finishFetching } from './actions';
import { AppThunk } from '../../app/utils';


/**
 * Thunk decorator(wrapper), adds request status tracking.
 *
 * @returns AppTunk
 */
export const withLoader = (action: AppThunk): AppThunk => (dispatch): Promise<void> => Promise.resolve()
  .then(() => dispatch(startFetching({})))
  .then(() => dispatch(action))
  .finally(() => dispatch(finishFetching({})));
