import * as React from 'react';


export interface HelloProps {
  compiler: string;
  framework: string;
}

export const App = ({ compiler, framework }: HelloProps) => (
  <h1>
      Hello from
    {compiler}
    {' '}
      and
    {framework}
      !
  </h1>
);
