import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './Routes';


export const App = (): JSX.Element => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
