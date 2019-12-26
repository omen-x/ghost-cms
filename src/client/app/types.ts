import { Action as ReduxAction } from 'redux';
import { InventoryActionMap } from '../services/inventory/types';
import { NavigationActionMap } from '../services/navigation/types';


type ActionType<ActionMap> = keyof ActionMap;


export type ActionMap =
  InventoryActionMap &
  NavigationActionMap;


type ActionPayload<ActionMap, Type extends ActionType<ActionMap>> = ActionMap[Type];


// Reaplaces old-style switch statements
export type ReducerCases<State, ActionMap> = {
  [Type in ActionType<ActionMap>]: (state: State, payload: ActionPayload<ActionMap, Type>) => State
};


interface ActionObject<ActionMap, Type extends ActionType<ActionMap>> extends ReduxAction {
  type: Type;
  payload: ActionPayload<ActionMap, Type>;
}


// Union type for all actions
export type Action<ActionMap> = {
  [T in ActionType<ActionMap>]: ActionObject<ActionMap, T>
}[ActionType<ActionMap>];


function createAction<ActionMap, Type extends ActionType<ActionMap>>(type: Type) {
  return (payload: ActionPayload<ActionMap, Type>): ActionObject<ActionMap, Type> => ({
    type,
    payload,
  });
}


export function createReducer<State, ActionMap>(
  initState: State, cases: Partial<ReducerCases<State, ActionMap>>,
) {
  return function reducer(state: State = initState, action: Action<ActionMap>): Readonly<State> {
    const fn = cases[action.type];

    if (fn) return fn(state, action.payload);
    return state;
  };
}

export function actionCreator<ActionMap>() {
  return {
    createAction<Type extends ActionType<ActionMap>>(type: Type) {
      return createAction<ActionMap, Type>(type);
    },
  };
}
