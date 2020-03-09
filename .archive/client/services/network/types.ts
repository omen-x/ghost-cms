export interface NetworkState {
  readonly isFetching: boolean;
}

export type NetworkActionMap = {
  START_FETCHING: {};
  FINISH_FETCHING: {};
};
