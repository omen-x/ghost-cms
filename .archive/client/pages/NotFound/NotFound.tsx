import React from 'react';
import { H2 } from '@blueprintjs/core';
import { Link } from 'react-router-dom';


const NotFound = (): JSX.Element => (
  <div>
    <H2>Page Not Found</H2>
    <Link to="/">Go to Dashboard</Link>
  </div>
);


export default NotFound;
