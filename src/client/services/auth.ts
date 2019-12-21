import http from './network';


export const logOut = (): Promise<void> => http.get('/logout')
  .then(() => window.location.reload());
